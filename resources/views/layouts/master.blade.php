<!doctype html>
<html class="no-js" lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>:: My-Task:: Employee Dashboard </title>
    <link rel="icon" href="favicon.ico" type="image/x-icon"> <!-- Favicon-->
    <!-- project css file  -->
    <link rel="stylesheet" href="{{asset('assets/css/my-task.style.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/plugin/fullcalendar/main.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/plugin/datatables/responsive.dataTables.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/plugin/datatables/dataTables.bootstrap5.min.css')}}">

</head>
<body>

<div id="mytask-layout" class="theme-indigo">


    <!-- sidebar -->
    <div class="sidebar px-4 py-4 py-md-5 me-0">
        <div class="d-flex flex-column h-100">
            <a href="index.html" class="mb-0 brand-icon">
                <span class="logo-icon">
                    <svg  width="35" height="35" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                    </svg>
                </span>
                <span class="logo-text">My-Task</span>
            </a>
            <!-- Menu: main ul -->

            <ul class="menu-list flex-grow-1 mt-3">
                @if (Auth::user()->role_id == 1 || Auth::user()->role_id == 3)
                    <li class="collapsed">
                        <a class="m-link @yield('client')"  data-bs-toggle="collapse" data-bs-target="#opp-Components" href="#">
                            <i class="icofont-user-male"></i> <span>Client</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                        <!-- Menu: Sub menu ul -->
                        <ul class="sub-menu collapse " id="opp-Components">
                            <li><a class="ms-link @yield('client')" href="{{ route('client.index') }}"> <span> client</span></a></li>
                        </ul>
                    </li>
                @endif

                @if (Auth::user()->role_id == 1 || Auth::user()->role_id == 3)
                <li class="collapsed">
                    <a class="m-link @yield('opportunite')"  data-bs-toggle="collapse" data-bs-target="#dashboard-Components" href="#">
                        <i class="icofont-files-stack"></i> <span>Opportunite</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                    <!-- Menu: Sub menu ul -->
                    <ul class="sub-menu collapse " id="dashboard-Components">
                        <li><a class="ms-link @yield('opportunite')" href="{{ route('opportunite.index') }}"> <span> opportunite</span></a></li>
                    </ul>
                </li>
                @endif
                <li  class="collapsed">
                    <a class="m-link @yield('projects')"  data-bs-toggle="collapse" data-bs-target="#project-Components" href="#">
                        <i class="icofont-briefcase"></i><span>Projects</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                    <!-- Menu: Sub menu ul -->
                    <ul class="sub-menu collapse" id="project-Components">
                        <li><a class="ms-link @yield('prot')" href="{{ url('project/index') }}"><span>Projects</span></a></li>
                        @if (Auth::user()->role_id == 1 || Auth::user()->role_id == 3)
                        <li><a class="ms-link @yield('task')" href="{{ route('project.task') }}"><span>Tasks</span></a></li>
                        {{-- <li><a class="ms-link @yield('team_leader')" href="{{ route('project.team_leader') }}"><span>Activite</span></a></li> --}}
                        <li><a class="ms-link @yield('cat_projet')" href="{{ route('cat_projet.index') }}"><span>Categorie projet</span></a></li>
                        @endif
                    </ul>
                </li>
                @if (Auth::user()->role_id == 3)
                <li class="collapsed">
                    <a class="m-link @yield('user')"  data-bs-toggle="collapse" data-bs-target="#emp-Components" href="#"><i
                            class="icofont-users-alt-5"></i> <span>Utilisateur</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                    <!-- Menu: Sub menu ul -->
                    <ul class="sub-menu collapse" id="emp-Components">
                        <li><a class="ms-link @yield('user')" href="{{ route('user.index') }}"> <span>utilisateur</span></a></li>
                    </ul>
                </li>
                @endif
                @if (Auth::user()->role_id == 3)
                <li class="collapsed">
                    <a class="m-link @yield('parametre') @yield('statut')" data-bs-toggle="collapse" data-bs-target="#app-Components" href="#">
                        <i class="icofont-ui-settings"></i> <span>Parametre</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                    <!-- Menu: Sub menu ul -->
                    <ul class="sub-menu collapse" id="app-Components">
                        <li><a class="ms-link @yield('parametre')" href="{{ route('parametre.role') }}"> <span>Role</span></a></li>
                        <li><a class="ms-link @yield('statut')" href="{{ route('parametre.statut') }}"><span>Categorie statut</span></a></li>
                        <li><a class="ms-link @yield('cat_tache')" href="{{ route('parametre.cat_tache') }}"><span>Categorie tache</span></a></li>
                        <li><a class="ms-link @yield('cat_livrable')" href="{{ route('parametre.cat_livrable') }}"><span>Categorie livrable</span></a></li>
                    </ul>
                </li>
                @endif


                <li><a class="m-link @yield('chat')" href="{{ route('Chat.index') }}"><i class="icofont-wechat"></i> <span>Chat</span></a></li>
            </ul>

            <!-- Theme: Switch Theme -->
            <ul class="list-unstyled mb-0">
                <li class="d-flex align-items-center justify-content-center">
                    <div class="form-check form-switch theme-switch">
                        <input class="form-check-input" type="checkbox" id="theme-switch">
                        <label class="form-check-label" for="theme-switch">Enable Dark Mode!</label>
                    </div>
                </li>
                {{-- <li class="d-flex align-items-center justify-content-center">
                    <div class="form-check form-switch theme-rtl">
                        <input class="form-check-input" type="checkbox" id="theme-rtl">
                        <label class="form-check-label" for="theme-rtl">Enable RTL Mode!</label>
                    </div>
                </li> --}}
            </ul>

            <!-- Menu: menu collepce btn -->
            <button type="button" class="btn btn-link sidebar-mini-btn text-light">
                <span class="ms-2"><i class="icofont-bubble-right"></i></span>
            </button>

        </div>
    </div>

    <div class="main px-lg-4 px-md-4">

        @if (!Route::is('Chat.index')  && !Route::is('Chat.conversation'))
            <div class="header">
                <nav class="navbar py-4">
                    <div class="container-xxl">

                        <!-- header rightbar icon -->
                        <div class="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                            <div class="d-flex">
                                <a class="nav-link text-primary collapsed" href="help.html" title="Get Help">
                                    <i class="icofont-info-square fs-5"></i>
                                </a>
                                <div class="avatar-list avatar-list-stacked px-3">
                                    <img class="avatar rounded-circle" src="{{asset('assets/images/xs/avatar2.jpg')}}" alt="">
                                    <img class="avatar rounded-circle" src="{{asset('assets/images/xs/avatar1.jpg')}}" alt="">
                                    <img class="avatar rounded-circle" src="{{asset('assets/images/xs/avatar3.jpg')}}" alt="">
                                    <img class="avatar rounded-circle" src="{{asset('assets/images/xs/avatar4.jpg')}}" alt="">
                                    <img class="avatar rounded-circle" src="{{asset('assets/images/xs/avatar7.jpg')}}" alt="">
                                    <img class="avatar rounded-circle" src="{{asset('assets/images/xs/avatar8.jpg')}}" alt="">
                                    <span class="avatar rounded-circle text-center pointer" data-bs-toggle="modal" data-bs-target="#addUser"><i class="icofont-ui-add"></i></span>
                                </div>
                            </div>


                            <div class="dropdown notifications zindex-popover">
                                <a class="nav-link dropdown-toggle pulse" href="#" role="button" data-bs-toggle="dropdown">
                                    <span style="display: none">{{   $notifications = App\Models\notification::where('user_accesses',Auth::user()->id)->get();  }}</span>

                                    @forelse ($notifications as $notification )
                                        @if($notification->etat =="not readed")
                                            <i class="icofont-alarm fs-5" style="color: #F19828"></i>
                                            <span class="pulse-ring"></span>
                                        @else
                                            <i class="icofont-alarm fs-5"></i>
                                    @endif
                                    @empty

                                    @endforelse

                                </a>
                                <div id="NotificationsDiv" class="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-sm-end p-0 m-0">
                                    <div class="card border-0 w380">
                                        <div class="card-header border-0 p-3">
                                            <h5 class="mb-0 font-weight-light d-flex justify-content-between">
                                                <span>Notifications</span>
                                                <span style="display: none">{{   $noti = App\Models\notification::where('etat','not readed')->count();  }}</span>

                                                <span class="badge text-white">{{ $noti }}</span>
                                            </h5>
                                        </div>
                                        <div class="tab-content card-body p-0">

                                            <div class="tab-pane fade show active">
                                                <span style="display: none">{{   $notifications = App\Models\notification::where('user_accesses',Auth::user()->id)->get();  }}</span>
                                                <ul class="list-unstyled list mb-0">
                                                    @forelse ($notifications as $notification )
                                                    @if($notification->etat =="not readed")
                                                    <li class="py-2 mb-1 border-bottom" style="background-color:#F7F4F9; padding: 1rem 1rem;">
                                                        <a href="{{ route('readnotify',$notification->id) }}" class="d-flex" >
                                                            <img class="avatar rounded-circle" src="{{ asset('assets/images/xs/avatar1.jpg') }}" alt="">
                                                            <div class="flex-fill ms-2">
                                                                <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">{{ $notification->user_notification->name }}</span> <small>{{ date('M d,Y', strtotime($notification->created_at)) }}</small></p>
                                                                <span class="">Nouveau activite :{{ $notification->message }}</span>

                                                            </div>
                                                        </a>
                                                    </li>
                                                    @else
                                                    <li class="py-2 mb-1 border-bottom" style="background-color:white; padding: 1rem 1rem;">
                                                        <span  class="d-flex" >
                                                            <img class="avatar rounded-circle" src="{{ asset('assets/images/xs/avatar1.jpg') }}" alt="">
                                                            <div class="flex-fill ms-2">
                                                                <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">{{ $notification->user_notification->name }}</span> <small>{{ date('M d,Y', strtotime($notification->created_at)) }}</small></p>
                                                                <span class="">Nouveau activite :{{ $notification->message }}</span>

                                                            </div>
                                                        </span>
                                                    </li>
                                                    @endif
                                                    @empty

                                                    @endforelse


                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover">
                                <div class="u-info me-2">
                                    <p class="mb-0 text-end line-height-sm "><span class="font-weight-bold">{{ Auth::user()->name }}</span></p>
                                    <small>Admin Profile</small>
                                </div>
                                <a class="nav-link dropdown-toggle pulse p-0" href="#" role="button" data-bs-toggle="dropdown" data-bs-display="static">
                                    <img class="avatar lg rounded-circle img-thumbnail" src="{{asset('assets/images/profile_av.png')}}" alt="profile">
                                </a>
                                <div class="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                                    <div class="card border-0 w280">
                                        <div class="card-body pb-0">
                                            <div class="d-flex py-1">
                                                <img class="avatar rounded-circle" src="{{asset('assets/images/profile_av.png')}}" alt="profile">
                                                <div class="flex-fill ms-3">
                                                    <p class="mb-0"><span class="font-weight-bold">{{ Auth::user()->name }}</span></p>
                                                    <small class="">{{ Auth::user()->email }}</small>
                                                </div>
                                            </div>

                                            <div><hr class="dropdown-divider border-dark"></div>
                                        </div>
                                        <div class="list-group m-2 ">
                                            <a href="task.html" class="list-group-item list-group-item-action border-0 "><i class="icofont-tasks fs-5 me-3"></i>My Task</a>
                                            <a href="members.html" class="list-group-item list-group-item-action border-0 "><i class="icofont-ui-user-group fs-6 me-3"></i>members</a>
                                            <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();" class="list-group-item list-group-item-action border-0 "><i class="icofont-logout fs-6 me-3"></i>Signout</a>
                                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                                @csrf
                                            </form>
                                            <div><hr class="dropdown-divider border-dark"></div>
                                            <a href="ui-elements/auth-signup.html" class="list-group-item list-group-item-action border-0 "><i class="icofont-contact-add fs-5 me-3"></i>Add personal account</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <!-- menu toggler -->
                        <button class="navbar-toggler p-0 border-0 menu-toggle order-3" type="button" data-bs-toggle="collapse" data-bs-target="#mainHeader">
                            <span class="fa fa-bars"></span>
                        </button>

                        <!-- main menu Search-->
                        <div class="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
                            <div class="input-group flex-nowrap input-group-lg">
                                <button type="button" class="input-group-text" id="addon-wrapping"><i class="fa fa-search"></i></button>
                                <input type="search" class="form-control" placeholder="Search" aria-label="search" aria-describedby="addon-wrapping">
                                <button type="button" class="input-group-text add-member-top" id="addon-wrappingone" data-bs-toggle="modal" data-bs-target="#addUser"><i class="fa fa-plus"></i></button>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        @endif
        <!-- Body: Header -->


        @yield("content")

        <!-- Modal Members-->
        <div class="modal fade" id="addUser" tabindex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="addUserLabel">Employee Invitation</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="inviteby_email">
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Email address" id="exampleInputEmail1" aria-describedby="exampleInputEmail1">
                            <button class="btn btn-dark" type="button" id="button-addon2">Sent</button>
                        </div>
                    </div>
                    <div class="members_list">
                        <h6 class="fw-bold ">Employee </h6>
                        <ul class="list-unstyled list-group list-group-custom list-group-flush mb-0">
                            <li class="list-group-item py-3 text-center text-md-start">
                                <div class="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                                    <div class="no-thumbnail mb-2 mb-md-0">
                                        <img class="avatar lg rounded-circle" src="{{asset('assets/images/xs/avatar2.jpg')}}" alt="">
                                    </div>
                                    <div class="flex-fill ms-3 text-truncate">
                                        <h6 class="mb-0  fw-bold">Rachel Carr(you)</h6>
                                        <span class="text-muted">rachel.carr@gmail.com</span>
                                    </div>
                                    <div class="members-action">
                                        <span class="members-role ">Admin</span>
                                        <div class="btn-group">
                                            <button type="button" class="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="icofont-ui-settings  fs-6"></i>
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-end">
                                              <li><a class="dropdown-item" href="#"><i class="icofont-ui-password fs-6 me-2"></i>ResetPassword</a></li>
                                              <li><a class="dropdown-item" href="#"><i class="icofont-chart-line fs-6 me-2"></i>ActivityReport</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item py-3 text-center text-md-start">
                                <div class="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                                    <div class="no-thumbnail mb-2 mb-md-0">
                                        <img class="avatar lg rounded-circle" src="{{asset('assets/images/xs/avatar3.jpg')}}" alt="">
                                    </div>
                                    <div class="flex-fill ms-3 text-truncate">
                                        <h6 class="mb-0  fw-bold">Lucas Baker<a href="#" class="link-secondary ms-2">(Resend invitation)</a></h6>
                                        <span class="text-muted">lucas.baker@gmail.com</span>
                                    </div>
                                    <div class="members-action">
                                        <div class="btn-group">
                                            <button type="button" class="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                Members
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-end">
                                              <li>
                                                  <a class="dropdown-item" href="#">
                                                    <i class="icofont-check-circled"></i>

                                                    <span>All operations permission</span>
                                                   </a>

                                                </li>
                                                <li>
                                                     <a class="dropdown-item" href="#">
                                                        <i class="fs-6 p-2 me-1"></i>
                                                           <span>Only Invite & manage team</span>
                                                       </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="btn-group">
                                            <button type="button" class="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="icofont-ui-settings  fs-6"></i>
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-end">
                                              <li><a class="dropdown-item" href="#"><i class="icofont-delete-alt fs-6 me-2"></i>Delete Member</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item py-3 text-center text-md-start">
                                <div class="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                                    <div class="no-thumbnail mb-2 mb-md-0">
                                        <img class="avatar lg rounded-circle" src="{{asset('assets/images/xs/avatar8.jpg')}}" alt="">
                                    </div>
                                    <div class="flex-fill ms-3 text-truncate">
                                        <h6 class="mb-0  fw-bold">Una Coleman</h6>
                                        <span class="text-muted">una.coleman@gmail.com</span>
                                    </div>
                                    <div class="members-action">
                                        <div class="btn-group">
                                            <button type="button" class="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                Members
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-end">
                                              <li>
                                                  <a class="dropdown-item" href="#">
                                                    <i class="icofont-check-circled"></i>

                                                    <span>All operations permission</span>
                                                   </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="fs-6 p-2 me-1"></i>
                                                           <span>Only Invite & manage team</span>
                                                       </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="btn-group">
                                            <div class="btn-group">
                                                <button type="button" class="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="icofont-ui-settings  fs-6"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                  <li><a class="dropdown-item" href="#"><i class="icofont-ui-password fs-6 me-2"></i>ResetPassword</a></li>
                                                  <li><a class="dropdown-item" href="#"><i class="icofont-chart-line fs-6 me-2"></i>ActivityReport</a></li>
                                                  <li><a class="dropdown-item" href="#"><i class="icofont-delete-alt fs-6 me-2"></i>Suspend member</a></li>
                                                  <li><a class="dropdown-item" href="#"><i class="icofont-not-allowed fs-6 me-2"></i>Delete Member</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>

</div>

    <!-- Jquery Core Js -->
    <script src="{{asset('assets/bundles/libscripts.bundle.js')}}"></script>

    <!-- Plugin Js-->
    <script src="{{asset('assets/bundles/apexcharts.bundle.js')}}"></script>
    <script src="{{asset('assets/bundles/charts.js')}}"></script>

    <!-- Jquery Page Js -->

    <script src="{{asset('assets/js/page/hr.js')}}"></script>
    <script src="{{asset('assets/plugin/fullcalendar/main.min.js')}}"></script>

    <!-- Plugin Js-->
    <script src="{{asset('assets/bundles/dataTables.bundle.js')}}"></script>


    @yield("scripts")


</body>
</html>
