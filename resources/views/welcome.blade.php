<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>:: My-Task:: Employee Dashboard </title>
        <link rel="icon" href="favicon.ico" type="image/x-icon"> <!-- Favicon-->
        <!-- project css file  -->
        <link rel="stylesheet" href="{{asset('assets/css/my-task.style.min.css')}}">

        <link rel="stylesheet" href="{{asset('assets/plugin/datatables/responsive.dataTables.min.css')}}">
        <link rel="stylesheet" href="{{asset('assets/plugin/datatables/dataTables.bootstrap5.min.css')}}">
    </head>
    <body>

        <button type="button" class="btn btn-dark ms-1 " data-bs-toggle="modal"
        data-bs-target="#createproject"><i class="icofont-plus-circle me-2 fs-6"></i>Add
        Client</button>

    <button class="edit_statut2" style="border: none"
    type="button" class="btn btn-outline-secondary" data-bs-toggle="modal"
    data-bs-target="#edididid"><i class="icofont-edit text-success"></i></button>


    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createproject">
    Launch demo modal
  </button>

  <!-- Modal -->
  <div class="modal fade" id="createproject" tabindex="-1" role="dialog" aria-labelledby="createprojectLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="createprojectLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>




  <div class="modal fade" id="edididid" tabindex="-1" role="dialog" aria-labelledby="edidididLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
  
    </div>
  </div>



    </body>

     <!-- Jquery Core Js -->
     <script src="{{asset('assets/bundles/libscripts.bundle.js')}}"></script>

     <!-- Plugin Js-->
     <script src="{{asset('assets/bundles/apexcharts.bundle.js')}}"></script>

     <!-- Jquery Page Js -->
     <script src="{{asset('assets/js/template.js')}}"></script>
     <script src="{{asset('assets/js/page/hr.js')}}"></script>

     <script src="{{asset('assets/bundles/libscripts.bundle.js')}}"></script>

     <!-- Plugin Js-->
     <script src="{{asset('assets/bundles/dataTables.bundle.js')}}"></script>

     <!-- Jquery Page Js -->
     <script src="{{asset('assets/js/template.js')}}"></script>


</html>
