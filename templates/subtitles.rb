require 'mustache'
class Subtitles < Mustache
  self.template_path = "./views/mustache"
  attr_reader :list
  def initialize(subtitles)
    @list = subtitles
  end
end