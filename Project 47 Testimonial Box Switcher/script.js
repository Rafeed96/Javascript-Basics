const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    // Add photo name and images
    {
        name: 'Tim Kane',
        position: 'Project Manager',
        photo: 'https://www.reef2reef.com/data/avatars/h/161/161705.jpg',
        text:'I just wanted to share a quick note and let you know that you guys do a really good job. I am glad I decided to work with you. It is really great how easy your websites are to update and manage. I never have any problem at all.',

    },

    {
        name: 'Ken Cha',
        position: 'Software Engineer',
        photo: 'https://media.istockphoto.com/id/915669382/photo/portrait-of-young-asian-boy.jpg?s=612x612&w=0&k=20&c=GZCNkVkWXnXEh_NYpt7XuE_SGKLQnAqwOaxgTgE8d_4=',
        text: 'Wow. I just updated my site and it was SO SIMPLE. I am blown away. You guys truly kick ass. Thanks for being so awesome. High fives!',
    },

    {
        name: 'Tamara Jones',
        position: 'UI/UX Designer',
        photo: 'https://pbs.twimg.com/profile_images/506472620045262850/txfpJZG9_400x400.jpeg',
        text: 'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save. Thanks, guys!',

    },

    {
        name: 'Abby Lee Marting',
        position: 'Human Resources',
        photo: 'https://media.istockphoto.com/id/1084661126/photo/close-up-of-woman-with-blank-expression.jpg?s=170667a&w=0&k=20&c=QSwgvRNzuJoHz2YghAibK5C_mvGP7ege-K6VecXkIzQ=',
        text: 'The Landscaping Professionals were quick, courteous and very helpful. They helped me restore my lawn and gardens completely after putting in my deck. I was worried it wouldn’t be done in time for my garden party, but they finished the job with time to spare!',

    },

    {
        name: 'Kendra Green',
        position: 'Sales',
        photo: 'https://i.pinimg.com/originals/b7/74/fd/b774fd854e367926512a11fff0a5905c.jpg',
        text: 'This shirt is so soft and comfortable. I was a bit worried about the size running small, but I normally wear a medium and it fits great. It’s so comfortable and breathable, I can wear it to bed or to the gym, and it looks great day-to-day too.',

    },
]

let idx = 1

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position


    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}

updateTestimonial()