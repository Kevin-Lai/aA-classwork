const APIUtil = require("./api_util.js");

class FollowToggle {

    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data('userId');
        this.initialState = this.$el.data('initialFollowState');

        this.render();
        this.handleClick();
        
    }

    render() {
        if(this.initialState === 'unfollowed'){
            this.$el.text('Follow!');
        }
        else if(this.initialState === 'following'){
            this.$el.text('Following!');
        }
        else if(this.initialState === 'unfollowing'){
            this.$el.text('Unfollowing!');
        }
        else{
            this.$el.text('Unfollow!');
        }

        // switch (this.initalState) {
        //     case 'followed':
        //       this.$el.prop('disabled', false);
        //       this.$el.html('Unfollow!');
        //       break;
        //     case 'unfollowed':
        //       this.$el.prop('disabled', false);
        //       this.$el.html('Follow!');
        //       break;
        //     case 'following':
        //       this.$el.prop('disabled', true);
        //       this.$el.html('Following...');
        //       break;
        //     case 'unfollowing':
        //       this.$el.prop('disabled', true);
        //       this.$el.html('Unfollowing...');
        //       break;
        //   }
    }

    handleClick(e){
        this.$el.on('click', function()={
		    e.preventDefault();

			if(this.initialState === 'unfollowed'){
				this.initialState = "following";
				this.render();

				// currently getting stuck with "following" being shown
				// issue with then()?
				APIUtil.followUser(this.userId).then(()=>{
					this.initialState = 'followed';
					this.render();
				});
			}
			else if(this.initialState === 'followed'){
				this.initialState = "unfollowing";
				this.render();

				// issue with then()?
				APIUtil.unfollowUser(this.userId).then(()=>{
					this.initialState = 'unfollowed';
					this.render();
				});
			}
	
		}
    }
}



module.exports = FollowToggle;