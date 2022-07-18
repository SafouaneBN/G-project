@extends("layouts.master")
@section('team_leader','active')
@section("content")
        <!-- Body: Body -->
        <div class="body d-flex py-lg-3 py-md-2">
            <div class="container-xxl">
                <div class="row align-items-center">
                    <div class="border-0 mb-4">
                        <div class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                            <h3 class="fw-bold mb-0">Team Leaders</h3>
                        </div>
                    </div>
                </div> <!-- Row end  -->
                <div class="row clearfix g-3">
                  <div class="col-sm-12">
                        <div class="card mb-3">
                            <div class="card-body">
                                <table id="myProjectTable" class="table table-hover align-middle mb-0" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th>Leader Name</th>
                                            <th>Project</th>
                                            <th>Total Task</th>
                                            <th>Email</th>
                                            <th>Project Assigned</th>
                                            <th>Assigned Staff</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                           <td>
                                               <img class="avatar rounded-circle" src="{{ asset('assets/images/xs/avatar1.jpg') }}" alt="">
                                               <span class="fw-bold ms-1">Joan Dyer</span>
                                           </td>
                                           <td>
                                               <a href="projects.html">Box of Crayons</a>
                                           </td>
                                           <td>
                                                <a href="task.html">5 Task</a>
                                           </td>
                                           <td>
                                                <a href="mailto:">JoanDyer@gmail.com</a>
                                           </td>
                                           <td>
                                                23/02/21
                                           </td>
                                           <td>
                                                <div class="avatar-list avatar-list-stacked px-3">
                                                    <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar2.jpg') }}" alt="">
                                                    <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar1.jpg') }}" alt="">
                                                    <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar3.jpg') }}" alt="">
                                                    <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar4.jpg') }}" alt="">
                                                    <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar7.jpg') }}" alt="">
                                                    <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar8.jpg') }}" alt="">
                                                    <span class="avatar rounded-circle text-center pointer sm" data-bs-toggle="modal" data-bs-target="#addUser"><i class="icofont-ui-add"></i></span>
                                                </div>
                                           </td>
                                           <td>
                                                <span class="badge bg-success">Working</span>
                                           </td>
                                            <td>
                                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                    <button type="button" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></button>
                                                    <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img class="avatar rounded-circle" src="{{ asset('assets/images/xs/avatar2.jpg') }}" alt="">
                                                <span class="fw-bold ms-1">Ryan	Randall</span>
                                            </td>
                                            <td>
                                                <a href="projects.html">Fast Cad</a>
                                            </td>
                                            <td>
                                                 <a href="task.html">8 Task</a>
                                            </td>
                                            <td>
                                                 <a href="mailto:">RyanRandall@gmail.com</a>
                                            </td>
                                            <td>
                                                 14/04/21
                                            </td>
                                            <td>
                                                 <div class="avatar-list avatar-list-stacked px-3">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar2.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar1.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar7.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar8.jpg') }}" alt="">
                                                     <span class="avatar rounded-circle text-center pointer sm" data-bs-toggle="modal" data-bs-target="#addUser"><i class="icofont-ui-add"></i></span>
                                                 </div>
                                            </td>
                                            <td>
                                                 <span class="badge bg-success">Working</span>
                                            </td>
                                             <td>
                                                 <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                     <button type="button" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></button>
                                                     <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                 </div>
                                             </td>
                                         </tr>
                                         <tr>
                                            <td>
                                                <img class="avatar rounded-circle" src="{{ asset('assets/images/xs/avatar3.jpg') }}" alt="">
                                                <span class="fw-bold ms-1">Phil	Glover</span>
                                            </td>
                                            <td>
                                                <a href="projects.html">Gob Geeklords</a>
                                            </td>
                                            <td>
                                                 <a href="task.html">2 Task</a>
                                            </td>
                                            <td>
                                                 <a href="mailto:">PhilGlover@gmail.com</a>
                                            </td>
                                            <td>
                                                 18/03/21
                                            </td>
                                            <td>
                                                 <div class="avatar-list avatar-list-stacked px-3">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar7.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar8.jpg') }}" alt="">
                                                     <span class="avatar rounded-circle text-center pointer sm" data-bs-toggle="modal" data-bs-target="#addUser"><i class="icofont-ui-add"></i></span>
                                                 </div>
                                            </td>
                                            <td>
                                                 <span class="badge bg-success">Working</span>
                                            </td>
                                             <td>
                                                 <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                     <button type="button" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></button>
                                                     <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                 </div>
                                             </td>
                                         </tr>
                                         <tr>
                                            <td>
                                                <img class="avatar rounded-circle" src="{{ asset('assets/images/xs/avatar4.jpg') }}" alt="">
                                                <span class="fw-bold ms-1">Victor Rampling</span>
                                            </td>
                                            <td>
                                                <a href="projects.html">Java Dalia</a>
                                            </td>
                                            <td>
                                                 <a href="task.html">7 Task</a>
                                            </td>
                                            <td>
                                                 <a href="mailto:">VictorRampling@gmail.com</a>
                                            </td>
                                            <td>
                                                 18/06/21
                                            </td>
                                            <td>
                                                 <div class="avatar-list avatar-list-stacked px-3">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar2.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar4.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar7.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar8.jpg') }}" alt="">
                                                     <span class="avatar rounded-circle text-center pointer sm" data-bs-toggle="modal" data-bs-target="#addUser"><i class="icofont-ui-add"></i></span>
                                                 </div>
                                            </td>
                                            <td>
                                                 <span class="badge bg-success">Working</span>
                                            </td>
                                             <td>
                                                 <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                     <button type="button" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></button>
                                                     <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                 </div>
                                             </td>
                                         </tr>
                                         <tr>
                                            <td>
                                                <img class="avatar rounded-circle" src="{{ asset('assets/images/xs/avatar5.jpg') }}" alt="">
                                                <span class="fw-bold ms-1">Sally Graham</span>
                                            </td>
                                            <td>
                                                <a href="projects.html">Practice to Perfect</a>
                                            </td>
                                            <td>
                                                 <a href="task.html">9 Task</a>
                                            </td>
                                            <td>
                                                 <a href="mailto:">SallyGraham@gmail.com</a>
                                            </td>
                                            <td>
                                                 13/01/21
                                            </td>
                                            <td>
                                                 <div class="avatar-list avatar-list-stacked px-3">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar1.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar3.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar4.jpg') }}" alt="">
                                                     <span class="avatar rounded-circle text-center pointer sm" data-bs-toggle="modal" data-bs-target="#addUser"><i class="icofont-ui-add"></i></span>
                                                 </div>
                                            </td>
                                            <td>
                                                 <span class="badge bg-success">Working</span>
                                            </td>
                                             <td>
                                                 <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                     <button type="button" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></button>
                                                     <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                 </div>
                                             </td>
                                         </tr>
                                         <tr>
                                            <td>
                                                <img class="avatar rounded-circle" src="{{ asset('assets/images/xs/avatar6.jpg') }}" alt="">
                                                <span class="fw-bold ms-1">Robert Anderson</span>
                                            </td>
                                            <td>
                                                <a href="projects.html">Rhinestone</a>
                                            </td>
                                            <td>
                                                 <a href="task.html">5 Task</a>
                                            </td>
                                            <td>
                                                 <a href="mailto:">RobertAnderson@gmail.com</a>
                                            </td>
                                            <td>
                                                 14/01/21
                                            </td>
                                            <td>
                                                 <div class="avatar-list avatar-list-stacked px-3">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar2.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar1.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar4.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar7.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar8.jpg') }}" alt="">
                                                     <span class="avatar rounded-circle text-center pointer sm" data-bs-toggle="modal" data-bs-target="#addUser"><i class="icofont-ui-add"></i></span>
                                                 </div>
                                            </td>
                                            <td>
                                                 <span class="badge bg-success">Working</span>
                                            </td>
                                             <td>
                                                 <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                     <button type="button" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></button>
                                                     <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                 </div>
                                             </td>
                                         </tr>
                                         <tr>
                                            <td>
                                                <img class="avatar rounded-circle" src="{{ asset('assets/images/xs/avatar7.jpg') }}" alt="">
                                                <span class="fw-bold ms-1">Ryan	Stewart</span>
                                            </td>
                                            <td>
                                                <a href="projects.html">Social Geek Made</a>
                                            </td>
                                            <td>
                                                 <a href="task.html">15 Task</a>
                                            </td>
                                            <td>
                                                 <a href="mailto:">RyanStewart@gmail.com</a>
                                            </td>
                                            <td>
                                                 13/01/21
                                            </td>
                                            <td>
                                                 <div class="avatar-list avatar-list-stacked px-3">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar2.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar1.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar3.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar4.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar7.jpg') }}" alt="">
                                                     <img class="avatar rounded-circle sm" src="{{ asset('assets/images/xs/avatar8.jpg') }}" alt="">
                                                     <span class="avatar rounded-circle text-center pointer sm" data-bs-toggle="modal" data-bs-target="#addUser"><i class="icofont-ui-add"></i></span>
                                                 </div>
                                            </td>
                                            <td>
                                                 <span class="badge bg-success">Working</span>
                                            </td>
                                             <td>
                                                 <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                     <button type="button" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></button>
                                                     <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                 </div>
                                             </td>
                                         </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                  </div>
                </div><!-- Row End -->
            </div>
        </div>
        @endsection