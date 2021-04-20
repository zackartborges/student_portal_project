<template>
  <div class="home">
    <div id="student-data">
      <!-- v-for/v-bind image link {{stydent.photo}}-->
      <img src="" alt="" />
      <!-- <h1>{{student.first_name}}</h1> -->
      <h3>First Name</h3>
      <!-- <h3>{{student.last_name}}</h3> -->
      <h3>Last Name</h3>
      <!-- <p>{{student.email}}</p> -->
      <p>Email</p>
      <!-- <p>{{student.phone}}</p> -->
      <p>Phone Number:</p>
      <!-- <p>{{student.photo}}</p> -->
      <p>Photo:</p>
      <!-- <p>{{student.bio}}</p> -->
      <p>Bio:</p>
      <!-- <p>{{student.linkedin_url}}</p> -->
      <p>Linkedin URL:</p>
      <!-- <p>{{student.twitter_handle}}</p> -->
      <p>Twitter:</p>
      <!-- <p>{{student.website_url}}</p> -->
      <p>Website:</p>
      <!-- <p>{{student.resume_url}}</p> -->
      <p>Resume:</p>
      <!-- <p>{{student.github_url}}</p> -->
      <p>Github:</p>
      <!-- <p>{{student.bio}}</p> -->
    </div>
    <div id="student-experiences">
      <button v-on:click="createWindow">Add Experience</button>
      <dialog id="create-experience-window">
        <form method="dialog">
          <h1>New Experience</h1>
            <div class="form-group">
              <label>Start Date:</label>
              <input type="text" class="form-control" v-model="startDate" />
            </div>
            <div class="form-group">
              <label>End Date:</label>
              <input type="text" class="form-control" v-model="endDate" />
            </div>
               <div class="form-group">
              <label>Job Title:</label>
              <input type="text" class="form-control" v-model="jobTitle" />
            </div>
               <div class="form-group">
              <label>Company Name:</label>
              <input type="text" class="form-control" v-model="companyName" />
            </div>
               <div class="form-group">
              <label>Details:</label>
              <input type="text" class="form-control" v-model="details" />
            </div>
            <button v-on:click="createExperience()">Submit</button>
            <button>close</button>
        </form>
      </dialog>
    </div>
    <div id="student-education"></div>
    <div id="student-skills"></div>
    <div id="student-capstone"></div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      student: {},
      experiences: {
        startDate: "",
        endDate: "",
        jobTitle: "",
        companyName: "",
        details: "",
      },
      // each variable above will need data here!
    };
  },
  mounted: function () {
    // axios.get
  },
  methods: {
    createExperience: function () {
      console.log("Creating an experience");
      var params = {
        startDate: this.startDate,
        endDate: this.endDate,
        jobTitle: this.jobTitle,
        companyName: this.companyName,
        details: this.details,
      };
      axios
        .post("/api/profile", params)
        .then(() => {
          this.$router.push("/profile");
        })
    },
    createWindow: function () {
      document.querySelector("#create-experience-window").showModal();
    }
  },
};
</script>
