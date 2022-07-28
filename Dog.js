

class Profile {
    constructor(data) {
        Object.assign(this, data)
        this.name = data.name;
        this.avatar = data.avatar;
        this.bio = data.bio;
        this.hasBeenSwiped = data.hasBeenSwiped;
        this.hasBeenLiked = data.hasBeenLiked;

    }
}

  
export default Profile;

