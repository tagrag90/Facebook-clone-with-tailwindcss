require "test_helper"

class NolloControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get nollo_index_url
    assert_response :success
  end
end
