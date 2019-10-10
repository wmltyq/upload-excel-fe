<template>
    <div class="container-fluid" id="scriptTable">
        <h3>My Script</h3>
        <form style="margin-top: 1rem">
            <input type="file" @change="getFile($event)" class="" multiple/>
            <input type="button" value="upload" @click="submit($event)" class="btn btn-dark">
        </form>
        <table class="table table-hover text-center table-bordered" style="word-break: break-all; word-wrap: break-word; margin-top: 1rem">
            <thead>
                <th>#</th>
                <th>Platform</th>
                <th>Action</th>
                <th>Path</th>
                <th>Value</th>
                <th>Wait</th>
                <th>Screenshot</th>
                <th>Change</th>
            </thead>
            <tbody>
                <tr v-cloak v-for="(item, index) in steps">
                    <th>{{ index + 1}}</th>
                    <td>{{ item.platform }}</td>
                    <td>{{ item.action }}</td>
                    <td>{{ item.path }}</td>
                    <td>{{ item.value }}</td>
                    <td>{{ item.wait }}</td>
                    <td>{{ item.screenshot }}</td>
                    <td><a href="#" v-on:click="edit(item)">Edit</a> | <a href="#" v-on:click="del(index)">Delete</a></td>
                </tr>
                <tr>
                    <th></th>
                    <td>
                        <select class="form-control" v-model="stepstemp.platform">
                            <option>Web</option>
                            <option>Android</option>
                        </select>
                    </td>
                    <td>
                        <select class="form-control" v-model="stepstemp.action">
                            <option>click</option>
                            <option>get</option>
                            <option>input</option>
                            <option>swipe</option>
                        </select>
                    </td>
                    <td>
                        <input class="form-control" v-model="stepstemp.path" placeholder="Enter the xPath">
                    </td>
                    <td>
                        <input class="form-control" v-model="stepstemp.value" placeholder="Enter the input value">
                    </td>
                    <td>
                        <input class="form-control" v-model="stepstemp.wait" placeholder="Waiting seconds">
                    </td>
                    <td>
                        <select class="form-control" v-model="stepstemp.screenshot">
                            <option>yes</option>
                            <option>no</option>
                        </select>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-dark" v-on:click="save" v-if="isNotEdit">Save</button>
                        <button class="btn btn-sm btn-primary" v-on:click="saveEdit" v-else>SaveEdit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "ScriptTable",
        data() {
            return ({
                steps: [],
                stepstemp: {
                    platform: '',
                    action: '',
                    path: '',
                    value: '',
                    wait: '',
                    screenshot: ''
                },
                isNotEdit: true
            });
        },
        methods: {
            save: function() {
                this.steps.push(this.stepstemp);
                this.stepstemp = {
                    platform: '',
                    action: '',
                    path: '',
                    value: '',
                    wait: '',
                    screenshot: ''
                };
            },
            del: function(index) {
                this.steps.splice(index, 1)
            },
            edit: function(item) {
                this.isNotEdit = false;
                this.stepstemp = item;
            },
            saveEdit: function() {
                this.isNotEdit = true;
                this.stepstemp = {
                    platform: '',
                    action: '',
                    path: '',
                    value: '',
                    wait: '',
                    screenshot: ''
                };
            },
            getFile: function(event) {
                this.file = event.target.files[0];
                console.log(this.file);
            },
            submit: function(event) {
                event.preventDefault();
                let formData = new FormData();
                formData.append("file", this.file);
                axios.post("http://localhost:8088/upload", formData).then(function (response) {
                    for (let i = 0; i < response.data.length; i++) {
                        var tempData = {
                            platform: response.data[i].platform,
                            action: response.data[i].action,
                            path: response.data[i].path,
                            value: response.data[i].value,
                            wait: response.data[i].wait,
                            screenshot: response.data[i].screenshot
                        };
                        this.steps.push(tempData);
                    }
                }.bind(this)).catch(function (error) {
                    alert("Fail");
                    console.log(error);
                })
            }
        }
    }
</script>

<style scoped>

</style>