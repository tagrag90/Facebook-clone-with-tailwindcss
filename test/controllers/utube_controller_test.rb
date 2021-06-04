require "test_helper"

class UtubeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get utube_index_url
    assert_response :success
  end
end
