class Api::BoardPinsController < ApplicationController

  def create

      @board_pin = BoardPin.new(board_pin_params)

      if @board_pin.save
        render json: {pinId: @board_pin.pin_id, boardId: @board_pin.board.id}
      else
        render json: @pin.errors.full_messages, status: 422
      end
    end



  def destroy
    @board_pin = BoardPin.find(params[:id])
    @board_pin.destroy

    render "api/boards/show"
  end

  private

  def board_pin_params
    params.require(:board_pin).permit(:pin_id, :board_id)
  end

end
