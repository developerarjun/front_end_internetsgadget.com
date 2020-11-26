<template>
 <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Manage Post</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="/admin/dashbord">Home</a></li>
              <li class="breadcrumb-item active">Post</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <section class="content">
      <div class="container-fluid">
           <div class="row">
          <!-- left column -->
          <div class="col-md-12">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add Post</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form>
                <div class="card-body">
                <div class="form-group">
                  <label for="exampleSelectRounded0">Choose Categories <code></code></label>
                  <select class="custom-select rounded-0" id="exampleSelectRounded0">
                    <option>Select</option>
                    <option>Value 2</option>
                    <option>Value 3</option>
                  </select>
                </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Post Title</label>
                    <input type="text" class="form-control"  placeholder="Enter Post Title">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Slug</label>
                    <input type="text" class="form-control" placeholder="enter-post-name">
                  </div> 
                  <div class="form-group">
                    <label for="exampleInputPassword1">Content</label>
                     <div class="card-body">
                    <textarea id="summernote">
                        Place <em>some</em> <u>text</u> <strong>here</strong>
                    </textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputFile">Status</label>
                    <div class="input-group">
                       <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Visible</label>
                  </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
          <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
               <div class="card-body">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Categories</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>183</td>
                      <td>John Doe</td>
                      <td>11-7-2014</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      categoriesId: '',
      categoriesName: '',
      isActive: false,
      slugs: '',
      loading: false,
      isError: '',
      Categories:[],
      AddUpdate: 'A'
    }
  },
  methods:{
    clear_data(){
      this.categoriesId= '',
      this.categoriesName= '',
      this.isActive= false,
      this.slugs= '',
      this.loading= false,
      this.isError= '',
      this.AddUpdate = 'A'
    },
    save_categories(){
      if(this.AddUpdate == 'A' && this.categoriesId ==0){
        this.add_categories();
      }else if(this.AddUpdate == 'E' && this.categoriesId != 0){
        this.update_categories();
      }
    },
    add_categories(){
        if(this.categoriesId.length != 0) return;
        if(this.AddUpdate == 'E') return;
        if(this.categoriesName.length == 0 || this.slugs.length == 0) return
        this.loading = true;
        let parms = {
          categoriesId  : 0,
          categoriesName  : this.categoriesName,
          isActive: this.isActive == true ? "active": "deactive",
          slugs: this.slugs
        }
        axios
          .post('http://localhost:3001/app/v1/post/categories',parms)
          .then(response => {
            if(response.status == 200 && response.statusText == 'OK'){
              this.loading = false;
              this.clear_data();
              alert("Successfully Added");
              this.get_categories();
            }
          })
        .catch(error => {
          console.log(error);
          this.loading = false;
          this.isError = 'Something gone error!! please try again'
          alert(this.isError);
        })
        .finally(() => this.loading = false)
    },
    update_categories(){
        if(this.AddUpdate == 'A') return;
        if(this.categoriesId.length == 0) return;
        if(this.categoriesName.length == 0 || this.slugs.length == 0) return
        this.loading = true;
        let parms = {
          categoriesId  : 0,
          categoriesName  : this.categoriesName,
          isActive: this.isActive == true ? "active": "deactive",
          slugs: this.slugs
        }
        axios
          .put(`http://localhost:3001/app/v1/post/categories/`+this.categoriesId,parms)
          .then(response => {
            if(response.status == 200 && response.statusText == 'OK'){
              this.loading = false;
              this.clear_data();
              alert("Successfully updated");
              this.get_categories();
            }
          })
        .catch(error => {
          console.log(error);
          this.loading = false;
          this.isError = 'Something gone error!! please try again'
          alert(this.isError);
        })
        .finally(() => this.loading = false)
    },
    get_categories(){
        axios
          .get('http://localhost:3001/app/v1/post/categories')
          .then(response => {
            if(response.status == 200 && response.statusText == 'OK'){
              this.Categories = response.data;
            }
          })
        .catch(error => {
          console.log(error);
          this.isError = 'Something gone error!! please try again'
          alert(this.isError);
        })
    },
    update_Categories(data){
      this.clear_data();
      this.categoriesId= data.CategoriesID;
      this.categoriesName = data.CategoriesName;
      this.slugs = data.Slugs;
      this.isActive= data.IsActive == 'active' ? true: false
      this.AddUpdate = 'E'
    }
  },
  mounted: function(){
    this.get_categories();
  }
}
</script>