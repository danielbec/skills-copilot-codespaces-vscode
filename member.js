function skillsMember() {
    console.log('skillsMember');
    console.log('this', this);
    console.log('this.skills', this.skills);
    console.log('this.skills.length', this.skills.length);
    this.skills.forEach(function (skill) {
        console.log('skill', skill);
    });
}