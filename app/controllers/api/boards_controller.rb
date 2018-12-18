class Api::BoardsController < ApplicationController

  def create
      @board = current_user.boards.new(board_params)

      if @board.save
        login(@board)
        render "api/boards/show"
      else
        render json: @board.errors.full_messages, status: 422
      end
    end

  def index
    @boards = User.find(params[:user_id]).boards
    render 'api/boards/index'
  end

  def show
    @board = Board.find(params[:id])
  end

  def update
    @board = Board.find(params[:id])

    if @board.update(board_params)
      render 'api/boards/index'    #this should probably be board page but json i didn't understand
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy

    render "api/boards/show"
  end

  private

  def board_params
    params.require(:board).permit(:title, :description)
  end

end
