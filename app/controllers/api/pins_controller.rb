class Api::PinsController < ApplicationController

  def create
      @pin = current_user.pins.new(pin_params)

      if @pin.save
        render "api/pins/show"
      else
        render json: @pin.errors.full_messages, status: 422
      end
    end

  def index
    @pins = User.find(params[:user_id]).pins
    render 'api/pins/index'
  end

  def show
    @pin = Pin.find(params[:id])
  end


  def destroy
    @pin = Pin.find(params[:id])
    @pin.destroy

    render "api/pins/show"
  end

  private

  def pin_params
    params.require(:pin).permit(:title, :description)
  end

end
