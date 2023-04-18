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
   #This updates a specific transaction
   def update
    transaction = Transaction.find_by(id: params[:id])
    
    if transaction
      if transaction.update(transaction_params)
        render json: transaction, status: :ok
      else
        render json: { errors: transaction.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Transaction not found" }, status: :not_found
    end
  end

   # This creates a new transaction
   def create
    transaction = Transaction.new(transaction_params)

    if transaction.save
      render json: { message: "Transaction created successfully", transaction: transaction }, status: :created
    else
      render json: { errors: transaction.errors.full_messages }, status: :unprocessable_entity
    end
  end

  
  
  private
  
  def transaction_params
    params.require(:transaction).permit(:donation_id, :payment_method, :status)
  end
end
