require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get home_home_url
    assert_response :success
  end

  test "should get webform" do
    get home_webform_url
    assert_response :success
  end

  test "should get restable" do
    get home_restable_url
    assert_response :success
  end

  test "should get game" do
    get home_game_url
    assert_response :success
  end

end
