class HomeController < ApplicationController
  def home
  end

  def webform
    @cat = Cat.new
  end

  def restable
  end

  def game
  end

  def restable
    @cats = Cat.all
  end
end
