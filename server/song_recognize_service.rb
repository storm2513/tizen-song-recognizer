require 'openssl'
require 'base64'
require 'net/http/post/multipart'

class SongRecognizeService
  attr_reader :file, :type

  HTTP_METHOD = 'POST'.freeze
  HTTP_URI = '/v1/identify'.freeze
  DATA_TYPE = 'audio'.freeze
  SIGNATURE_VERSION = '1'.freeze

  def initialize(file, type)
    @file = file
    @type = type
  end

  def call
    request = Net::HTTP::Post::Multipart.new(
      request_uri.path,
      'sample'            => UploadIO.new(file, type, 'file'),
      'access_key'        => access_key,
      'data_type'         => DATA_TYPE,
      'signature_version' => SIGNATURE_VERSION,
      'signature'         => signature,
      'sample_bytes'      => file.size,
      'timestamp'         => timestamp
    )
    response = Net::HTTP.start(request_uri.host, request_uri.port) do |http|
      http.request(request)
    end
    response.body
  end

  private

  def timestamp
    Time.now.utc.to_i.to_s
  end

  def access_key
    @access_key ||= ENV['ACCESS_KEY']
  end

  def access_secret
    @access_secret ||= ENV['ACCESS_SECRET']
  end

  def request_uri
    @request_uri ||= URI.parse("http://#{ENV['HOST']}/v1/identify")
  end

  def string_to_sign
    HTTP_METHOD + "\n" +
      HTTP_URI + "\n" +
      access_key + "\n" +
      DATA_TYPE + "\n" +
      SIGNATURE_VERSION + "\n" +
      timestamp
  end

  def signature
    Base64.encode64(
      OpenSSL::HMAC.digest(
        OpenSSL::Digest.new('sha1'),
        access_secret,
        string_to_sign
      )
    )
  end
end
