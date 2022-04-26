# Dalton Huey's Portfolio
I designed and built my portfolio to house my creative work in videography, web development, and (soon) music. It's built with both React and Ruby on Rails, and features some fun technologies like React Router and ESBuild.

**Production:** [daltonhuey.com](https://daltonhuey.com)

---

### 🛠 Tech Stack
* Ruby on Rails API (back-end)
* React
* React Router
* ESBuild for bundling
* SendGrid for email handling
* PostgreSQL for the database
---

### ⚙️ How It Works
The main application is primarily a standard React app (with React Router, of course).

However, I've also implemented user authentication so that I can add and update my projects from the UI. The single user (myself) is created using the Rails console, and the `current_user` is stored in the session.

Once logged in, the user gains CRUD action access to Video Projects and Tech Projects.

The contact form is handled via the `MessagesMailer`, which is hooked up to SendGrid for the actual delivery of the email.

---

### 🖥 For Developers
Currently running `Ruby v3.1.1` and `Rails 7.0.2`.

If you'd like to run this portfolio locally, you'll need to add a file in the `config` directory named `local_env.yml`. It should have the contents:
```
API_URL: http://localhost:3000/
```

Without this file, all API calls will fail, as they look for this environment variable to supply the host name.

When starting your Rails/React server, you won't use your normal `rails s` command. Use `bin/dev` instead. This will run ESBuild, start the server, and watch for changes to the JS files as you're working.

**Other tools you'll need:**
* Postgres and a PostgreSQL server
* Node
* Yarn

#### A word about emails

My portfolio uses the `letter_opener` gem to handle viewing emails in the development and staging environments. In a local development environment, `letter_opener` will open a new tab with the email content whenever an email is sent.