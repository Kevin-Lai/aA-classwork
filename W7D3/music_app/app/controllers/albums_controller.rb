class AlbumsController < ApplicationController
    def new
        @album = Album.new
        render :new
    end

    
  def toggle_studio
    if @album.studio
      @album.studio.update(studio: false)
    else
      @album.studio.update(studio: true)
    end
  end
    def show
        @albums = Albums.all
        render :show
    end

    def create
        @album = Album.new(album_params)
        if @album.save
            # redirect to show
            redirect_to album_url

        else
            render :new
        end
    end

    def edit
        
    end

    def index
       @albums = Album.all
        render :index
        # render plain: "I'm in the index action!"
    end

    def update
       @album = Album.find(params[:id])
        if @album.update(album_params)
           @album.save
            redirect_to album_url(@album)
        else
            render json:album.errors.full_messages, status: :unprocessable_entity
        end
        
    end

    def destroy
       album = Album.find(params[:id])
       album.destroy
       render json:album
    end
    
    def album_params
        params.require(:album).permit(:title, :year, :studio)
    end
end
