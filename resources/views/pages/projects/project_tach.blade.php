@extends('layouts.master')
@section('projet', 'active')
@section('content')





    <!-- Body: Body -->
    <div class="body d-flex py-lg-3 py-md-2">
        <div class="container-xxl">
            <div class="row align-items-center">
                <div class="border-0 mb-4">
                    <div
                        class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                        <h3 class="fw-bold mb-0">Task Management</h3>

                    </div>
                </div>
            </div> <!-- Row end  -->
            <div class="row clearfix  g-3">
                <div class="col-lg-12 col-md-12 flex-column">
                    <div class="row g-3 row-deck">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div class="card">
                                <div class="card-header py-3">
                                    <h6 class="mb-0 fw-bold ">Task Progress</h6>
                                </div>
                                <div class="card-body mem-list">
                                    @foreach ($tasks as $task)
                                        <div class="progress-count mb-4">
                                            <div class="d-flex justify-content-between align-items-center mb-1">
                                                <h6 class="mb-0 fw-bold d-flex align-items-center">{{ $task->tache }}</h6>
                                                <span class="small text-muted">{{ $task->estemation }} Days</span>
                                            </div>
                                            <span style="display: none">{{ $diff_in_days = Illuminate\Support\Carbon::createFromFormat('Y-m-d  H:s:i', $task->date_debut)->diffInDays(Illuminate\Support\Carbon::createFromFormat('Y-m-d  H:s:i', Illuminate\Support\Carbon::now() )); }}</span>
                                            <div class="progress" style="height: 10px;">
                                                <div class="progress-bar bg-lightgreen" role="progressbar"
                                                    style="width: {{ $diff_in_days }}%" aria-valuenow="60" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>


                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div class="card">
                                <div class="card-header py-3">
                                    <h6 class="mb-0 fw-bold ">Recent Activity</h6>
                                </div>
                                <div class="card-body mem-list">
                                    @if ($activitiesList == null)
                                        <div class="timeline-item ti-danger border-bottom ms-2">
                                            <div class="d-flex">
                                                <div class="flex-fill ms-3">
                                                    <div class="mb-1"><strong>No Activity</strong></div>
                                                </div>
                                            </div>
                                        </div> <!-- timeline item end  -->
                                    @else
                                        @foreach ($activitiesList as $List)
                                            @foreach ($List as $key)
                                                <div class="timeline-item ti-danger border-bottom ms-2">
                                                    <div class="d-flex">
                                                        <span
                                                            class="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">RH</span>
                                                        <div class="flex-fill ms-3">
                                                            <div class="mb-1"><a href="{{ route('tach.comment',$key->id) }}"><strong> {{ $key->libelle }}</strong></a>
                                                            </div>
                                                            <span class="d-flex text-muted">20Min ago</span>
                                                        </div>
                                                    </div>
                                                </div> <!-- timeline item end  -->
                                            @endforeach
                                        @endforeach
                                    @endif
                                </div>
                            </div> <!-- .card: My Timeline -->
                        </div>



                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
                            <div class="card">
                                <div class="card-header py-3">
                                    <h6 class="mb-0 fw-bold ">Allocated Task Members</h6>
                                </div>
                                <div class="card-body">
                                    <div class="flex-grow-1 mem-list">

                                        @foreach ($activitiesList as $List)
                                            @foreach ($List as $key)
                                                <div class="py-2 d-flex align-items-center border-bottom">

                                                    <div class="d-flex ms-2 align-items-center flex-fill">
                                                        <img src={{ asset('assets/images/lg/avatar3.jpg') }}
                                                            class="avatar lg rounded-circle img-thumbnail" alt="avatar">
                                                        <div class="d-flex flex-column ps-2">
                                                            <h6 class="fw-bold mb-0">{{ $key['user_activites']['name'] }}
                                                            </h6>
                                                            <span class="small text-muted">Ui/UX Designer</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            @endforeach
                                        @endforeach

                                    </div>
                                </div>
                            </div> <!-- .card: My Timeline -->
                        </div>




                    </div>

                </div>
            </div>
        </div>
    </div>







    {{-- @foreach ($activitiesList as $List)
        @foreach ($List as $key)
            {{ $key }}
        @endforeach
    @endforeach


    <p>___________________________________________________</p>

    @foreach ($tasks as $task)
        {{ $task }}
    @endforeach


    <p>___________________________________________________</p>

    @foreach ($activitiesList as $List)
        @foreach ($List as $key)
            {{ $key['user_activites']['name'] }}
        @endforeach
    @endforeach --}}


@endsection
