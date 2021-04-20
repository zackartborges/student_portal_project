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
    <div id="student-skills">
      <h3>Skills:</h3>
    </div>
    <div id="student-capstone">
      <form v-on:submit.prevent="createSkill()">
        <input v-model="new_skill" type="text" id="skill-input" placeholder="CRUD Apps, Ruby, etc.¸" />
        <button type="submit">Add Skill</button>
      </form>
      <div id="skills-list" v-for="skill in skills_list" :key="skill">
        <ul>
          <li>
            {{ skill }}
            <button v-on:click="destroySkill()">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {
      student: {},
      skills_list: ["skill 1", "skill 2"],
      new_skill: "",
      // each variable above will need data here!
    };
  },
  mounted: function () {
    // axios.get
  },
  methods: {
    createSkill() {
      console.log("skill being added...");
      this.skills_list.unshift(this.new_skill);
      this.new_skill = "";
    },
    destroySkill(skill) {
      console.log("skill being deleted...");
      var index = this.skills_list.indexOf(skill);
      this.skills_list.splice(index, 1);
    },
  },
};
</script>
