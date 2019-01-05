<template>
    <div>
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-4">Devices</h5>
                        <div class="fluid-container">

                        <form @submit.prevent="doLogin">
                            <div class="form-group">
                                <label for="name">Device Name</label>
                                <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Device name" v-model="device.name">
                                <i class="mdi mdi-account"></i>
                            </div>
                            <div class="mt-5">
                                <button class="btn btn-block btn-warning btn-lg font-weight-medium" type="submit">Create</button>
                            </div>
                        </form>


                            <div class="row ticket-card mt-3 pb-2 border-bottom" v-for="item in devices">


                                <div class="col-1">
                                    <img class="img-sm rounded-circle" src="http://www.bootstrapdash.com/demo/star-admin-free/jquery/images/faces/face1.jpg" alt="profile image">
                                </div>
                                <div class="ticket-details col-9">
                                    <div class="d-flex">
                                        <p class="text-primary font-weight-bold mr-2 mb-0 no-wrap">{{ item.id }} :</p>
                                        <p class="font-weight-bold mb-0 ellipsis">{{ item.name }} Lorem ipsum dolor sit amet, consectetur.</p>
                                    </div>
                                    <p class="text-small text-gray">data from DB axios. <a href='' @click.prevent="doDelete(item.id)">del</a>

                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../Partials/Navbar.vue'
    export default {
        components: {
          Navbar
        },
        name: 'Logsuccessrm',
        data: () => ({
            device: {name: ''},
            devices: []
        }),

        mounted ()
        {
          this.initialData();
        },
        methods: {
          initialData(){

            let headers = { 'Authorization': this.$auth.getToken() }

              this.$http.get(`${window.basePath}/device`, this.device,{headers})
              .then(response => {
                console.log(response.data)
                  this.devices=response.data
                  this.device.name=''
                  // this.$router.push({ path: '/' })
              })
              .catch(err => {
                  alert('verify your credentials')
              })
          },
            doDelete (id)
            {
              let headers = { 'Authorization': this.$auth.getToken() }

                this.$http.get(`${window.basePath}/device/delete/`+ id, {params: {id: this.device.id}},{headers})
                .then(response => {
                  console.log(response.data)
                    this.devices=response.data
                    this.device.name=''
                    // this.$router.push({ path: '/' })
                })
                .catch(err => {
                    alert('verify your credentials')
                })
            },
            doLogin ()
            {
              let headers = { 'Authorization': this.$auth.getToken() }

                this.$http.post(`${window.basePath}/device`, this.device,{headers})
                .then(response => {
                  console.log(response.data)
                    this.devices=response.data
                    this.device.name=''
                    // this.$router.push({ path: '/' })
                })
                .catch(err => {
                    alert('verify your credentials')
                })
            }

        }
    }
</script>

<style scoped>
    .auth.login-full-bg {
        background: url('http://www.bootstrapdash.com/demo/star-admin-free/jquery/images/auth/login_1.jpg');
        background-size: cover;
    }
</style>
