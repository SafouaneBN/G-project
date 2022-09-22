@extends("layouts.master")
@section('projet','active')
@section("content")

<!-- Body: Body -->
<div class="body d-flex py-3">
    <div class="container-xxl">
        <div class="row clearfix g-3">
            <div class="col-xl-8 col-lg-12 col-md-12 flex-column">
                <div class="row g-3">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                <h6 class="mb-0 fw-bold ">Activites Info</h6>
                            </div>
                            <div class="card-body">
                                <div class="evolution1" id="evolution1"></div>
                                {{-- <div class="ac-line-transparent" id="apex-emplyoeeAnalytics"></div> --}}
                            </div>
                        </div>
                    </div>


                </div>

                <div class="col">
                    <div class="card mb-3">
                        <div class="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                            <h6 class="m-0 fw-bold">Projets</h6>
                        </div>
                        <div class="card-body">
                            <div id="donut-count-project"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-12 col-md-12">
                <div class="row g-3 row-deck">
                    <div class="col-md-6 col-lg-6 col-xl-12">
                        <div class="card bg-primary">
                            <div class="card-body row">
                                <div class="col">
                                    <span class="avatar lg bg-white rounded-circle text-center d-flex align-items-center justify-content-center"><i class="icofont-file-text fs-5"></i></span>
                                    <h1 class="mt-3 mb-0 fw-bold text-white">{{ $projets }}</h1>
                                    <span class="text-white">Projet</span>
                                </div>
                                <div class="col">
                                    <img class="img-fluid" src="{{asset('assets/images/interview.svg')}}" alt="interview">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-12  flex-column">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="d-flex align-items-center flex-fill">
                                    <span class="avatar lg light-success-bg rounded-circle text-center d-flex align-items-center justify-content-center"><i class="icofont-users-alt-2 fs-5"></i></span>
                                    <div class="d-flex flex-column ps-3  flex-fill">
                                        <h6 class="fw-bold mb-0 fs-4">{{ $clients }}</h6>
                                        <span class="text-muted">Client</span>
                                    </div>
                                    <i class="icofont-chart-bar-graph fs-3 text-muted"></i>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center flex-fill">
                                    <span class="avatar lg light-success-bg rounded-circle text-center d-flex align-items-center justify-content-center"><i class="icofont-holding-hands fs-5"></i></span>
                                    <div class="d-flex flex-column ps-3 flex-fill">
                                        <h6 class="fw-bold mb-0 fs-4">{{ $opportunites }}</h6>
                                        <span class="text-muted">Opporunites</span>
                                    </div>
                                    <i class="icofont-chart-line fs-3 text-muted"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-12 col-xl-12">
                        <div class="card">
                        <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                            <h6 class="mb-0 fw-bold ">Les employers</h6>
                        </div>
                        <div class="card-body">
                            <div class="flex-grow-1">
                              @forelse ( $users as $user )
                              <div class="py-2 d-flex align-items-center border-bottom flex-wrap">
                                <div class="d-flex align-items-center flex-fill">
                                    <img class="avatar lg rounded-circle img-thumbnail" src="{{asset('assets/images/lg/avatar7.jpg')}}" alt="profile">
                                    <div class="d-flex flex-column ps-3">
                                        <h6 class="fw-bold mb-0 small-14">{{ $user->name }}</h6>
                                        <span class="text-muted">employer</span>
                                    </div>
                                </div>

                            </div>
                              @empty

                              @endforelse


                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div><!-- Row End -->
    </div>
</div>

@endsection






@section('scripts')
    <script>
        evolution1();
        getCountByTypeClient();
    </script>
@endsection
