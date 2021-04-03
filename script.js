const name = ['Pooja','Varun','Krithika','Keerthivasan','Nikhilesh'];
const action = ['went to hotel','went to beach','went for movie','went to park','went to home'];
const location = ['Buhari','Besant Nagar','Inox','National Park','House'];
const time = ['at 10:00 P.M.','at 3:30 P.M.','at 11:30 A.M.','at 6:00 P.M.','at 12:30 P.M.'];

function composerFacts() {
    function getRandNum(array){
        return Math.floor(Math.random() * array.length);
    }
    
    let person = name[getRandNum(name)];
    let activity = action[getRandNum(action)];
    let place = location[getRandNum(location)];
    let timeSlot = time[getRandNum(time)];

    let fullString = `${person} ${activity} ${place} ${timeSlot}`;
    console.log("Did you know:")
    console.log(fullString);
};

composerFacts();
