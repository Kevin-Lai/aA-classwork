class BandsController < ApplicationController
   

    # user routes: create, new, show

    def new
        @band = Band.new
        render :new
    end

    
    def show
        render :show
    end

    def create
        @band = Band.new(band_params)
        if @band.save
            # redirect to show
            redirect_to band_url

        else
            render :new
        end
    end

    def edit
        
    end

    def index
       @bands = Band.all
        render :index
        # render plain: "I'm in the index action!"
    end

    def update
       @band = Band.find(params[:id])
        if @band.update(band_params)
           @band.save
            redirect_to bands_url(@band)
        else
            render json:band.errors.full_messages, status: :unprocessable_entity
        end
        
    end

    def destroy
       band = Band.find(params[:id])
       band.destroy
       render json:band
    end
    
    def band_params
        params.require(:band).permit(:name)
    end
end
