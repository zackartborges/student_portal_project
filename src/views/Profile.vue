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
    <div id="student-experiences"></div>

    <div class="student-education">
      <button v-on:click="showEducation()">Education Input</button>
      <dialog id="education-details">
        <form method="dialog">
          <h1>Education Experience</h1>
          <div class="form-group">
            <label>Start Date:</label>
            <input type="text" class="form-control" v-model="start" />
          </div>
          <div class="form-group">
            <label>End Date:</label>
            <input type="text" class="form-control" v-model="end" />
          </div>
          <div class="form-group">
            <label>Degree:</label>
            <input type="text" class="form-control" v-model="degree" />
          </div>
          <div class="form-group">
            <label>University Name:</label>
            <input type="text" class="form-control" v-model="university" />
          </div>
          <div class="form-group">
            <label>Details:</label>
            <input type="text" class="form-control" v-model="details" />
          </div>
          <input type="submit" class="btn btn-primary" value="Submit" />
          <button>Close</button>
        </form>
      </dialog>
    </div>

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
      // education experience data
      start: "",
      end: "",
      degree: "",
      university: "",
      details: "",
    };
  },
  mounted: function () {
    // axios.get
  },
  methods: {
    createEducation: function () {
      console.log("Creating Eduction info");
      var params = {
        startDate: this.startDate,
        endDate: this.endDate,
        degree: this.degree,
        university: this.university,
        details: this.details,
      };
      axios
        .post("/api/education", params)
        .then((response) => {
          console.log(response.data);
          this.education.push(response.data);
        })
        .catch((error) => console.log(error.response));
    },
    showEducation: function () {
      document.querySelector("#education-details").showModal();
    },
    updateEducation: function (education) {
      console.log("Updating Eduction info");
      var params = {
        startDate: this.startDate,
        endDate: this.endDate,
        degree: this.degree,
        university: this.university,
        details: this.details,
      };
      axios
        .patch("/api/eduction" + education.id, params)
        .then((response) => {
          console.log("Success", response.data);
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>
