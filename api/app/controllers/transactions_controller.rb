class TransactionsController < ApplicationController
    # displays all transactions
    def index
    transactions= Transaction.all 
    render json: transactions, status: :ok
    end

    # This shows a specific Transaction
    def show
        transaction = Transaction.find_by(id: params[:id])

    if transaction
      render json: transaction
    else
      render json: { error: "Transaction not found" }, status: :not_found
    end
  end

  

end
