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
      capstoneName: "",
      capstoneDescription: "",
      capstoneUrl: "",
      caspstoneScreenshot: "",
      // each variable above will need data here!
    };
  },
  mounted: function () {
    this.showStudent();
  },
  methods: {
    // incomplete/ need routes to correctly create these methods

    showStudent: function () {
      axios.get("/api/students/" + this.student.id).then((response) => {
        console.log(response.data);
        this.student = response.data;
      });
    },
    createCapstone: function () {
      console.log("Creating your capstone info!");
      var params = {
        name: this.name,
        description: this.description,
        url: this.url,
        screenshot: this.screenshot,
      };
      axios
        .post("/api/students/" + this.student.id, params)
        .then(() => {
          console.log("capstone added!");
        })
        .catch((error) => console.log(error.response));
    },
    updateCapstone: function (capstone) {
      console.log("Updating capstone");
      var params = {
        name: capstone.name,
        description: capstone.description,
        url: capstone.url,
        screenshot: capstone.screenshot,
      };
      axios
        .patch("/api/students/" + this.student.id, params)
        .then(() => {
          // this.$router.push("/capstones/" + this.capstone.id);
        })
        .catch((error) => console.log(error.response));
    },
    destroyCapstone: function (capstone) {
      axios.delete("/api/students/" + capstone.id).then(() => {
        console.log("Destroyed");
        // this.$router.push("/students");
      });
    },
  },
};
</script>
