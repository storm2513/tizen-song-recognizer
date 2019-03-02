require 'sinatra'
require 'sinatra/json'
require 'json'
require_relative 'song_recognize_service'
require 'dotenv/load'

before do
  headers['Access-Control-Allow-Methods'] = 'POST'
  headers['Access-Control-Allow-Origin'] = '*'
  headers['Access-Control-Allow-Headers'] = 'accept, origin'
end

post '/audio' do
  content_type :json

  blob = params[:blob]
  response = nil

  !!blob && File.open(blob[:tempfile]) do |file|
    service = SongRecognizeService.new(file, params[:blob][:type])
    response = service.call
  end

  response
end
