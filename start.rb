require 'sinatra'
require 'legendastv-crawler'
require './templates/subtitles'

get '/' do
  erb :index
end

get '/subtitles/:type' do
  subtitles =  LegendasTV::Crawler.__send__ params[:type]
  Subtitles.new(subtitles).render
end