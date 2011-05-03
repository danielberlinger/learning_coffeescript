require 'rack/file'

run Rack::File.new(File.expand_path('public'))