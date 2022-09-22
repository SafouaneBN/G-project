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
                                <div class="card-header col-auto d-flex justify-content-between">
                                    <h6 class="mb-0 fw-bold ">Taches</h6>
                                    <a class="nav-link py-2 px-3 text-muted d-none d-lg-block" type="button" data-bs-toggle="modal" data-bs-target="#user"><i class="icofont-plus-circle me-2 fs-6"></i></a>

                                </div>
                                <div class="card-body mem-list">
                                    @foreach ($tasks as $task)
                                        <div class="progress-count mb-4">
                                            <div class="d-flex  align-items-center mb-1">
                                                <h6 class="mb-0 fw-bold d-flex align-items-center">{{ $task->tache }}</h6>
                                                <a type="button"
                                            href="{{ route('tache.activte',$task->id) }}"
                                            style="border: none" class="sup_statut"
                                            class="btn btn-outline-secondary deleterow "><i class="icofont-eye-alt lef "></i>
                                        </a>

                                            </div>
                                            <span style="display: none">{{ $diff_in_days = Illuminate\Support\Carbon::createFromFormat('Y-m-d  H:s:i', $task->date_fin)->diffInDays(Illuminate\Support\Carbon::createFromFormat('Y-m-d  H:s:i', Illuminate\Support\Carbon::now() )); }}</span>
                                            <div class="progress" style="height: 10px;">
                                                <div class="progress-bar bg-lightgreen" role="progressbar"
                                                    style="width: {{ (($task->estemation - $diff_in_days) * 100) / $task->estemation}}%" >
                                                </div>
                                            </div>
                                            <span class="small text-muted">{{ $task->estemation }} Days</span>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>


                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div class="card">
                                <div class="card-header py-3">
                                    <h6 class="mb-0 fw-bold ">Nouvelle Activite</h6>
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
                                                            class="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">{{substr($key->libelle,0,2)}}</span>
                                                        <div class="flex-fill ms-3">
                                                            <div class="mb-1"><a href="{{ route('tach.comment',$key->id) }}"><strong> {{ $key->libelle }}</strong></a>
                                                            </div>
                                                            <span class="d-flex text-muted">{{ $key->duree_prevue }} Days</span>
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
                                    <h6 class="mb-0 fw-bold ">Employers</h6>
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
                                                            <h6 class="fw-bold mb-0">{{ $key['user_activites_acces']['name'] }}
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


    <div class="modal fade" id="user" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="depeditLabel"> livrable</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form method="post" action="{{ route('parametre.addtache') }}">
                    @csrf
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Tache</label>
                            <input class="form-control" name="tache" type="text" id="formFileMultipleone" required>
                        </div>


                        <div class="deadline-form mb-3">
                            <div class="row">
                                <div class="col">
                                    <label for="datepickerded" class="form-label">categorie tache</label>
                                    <select class="form-select" name="cat_tache_id" aria-label="Default select Priority">
                                        @forelse ($cat_taches as $cat_tache)
                                            <option value="{{ $cat_tache->id }}">{{ $cat_tache->cat_tache }}
                                            </option>
                                        @empty
                                            <option selected="">ajouter categorie tache</option>
                                        @endforelse
                                    </select>
                                </div>

                            </div>

                        </div>

                        <div class="deadline-form mb-3">

                            <div class="row">
                                <div class="col">
                                    <label for="datepickerded" class="form-label">Tache Start Date</label>
                                    <input type="date" name="date_debut" class="form-control" id="date_debut">
                                </div>
                                <div class="col">
                                    <label for="datepickerdedone" class="form-label">Tache End Date</label>
                                    <input type="date" name="date_fin" class="form-control" id="date_fin">
                                </div>
                            </div>

                        </div>
                        <input type="" value="{{ $projet->id }}" name="projet_id" class="projet_id">


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="submit" class="btn btn-dark ms-1 cmt" value="{{ $projet->id }}"><i
                            class="icofont-plus-circle me-2 fs-6"></i>ajouter</button>

                    </div>
                </form>
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
@section('scripts')
<script>


    document.getElementById("date_debut").onchange = function() {
        var input = document.getElementById("date_fin");
        input.setAttribute("min", this.value);
    }
</script>
@endsection

