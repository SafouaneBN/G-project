@extends('layouts.master')
@section('task', 'active')
@section('content')
    <!-- Body: Body -->
    <div class="card mb-3">
        <div class="card-header py-3  bg-transparent border-bottom-0">
            <div class="row clearfix">
                <div class="col-md-12">
                    <div class="card border-0 mb-4 no-bg">
                        <div class="card-header py-3 px-0 d-flex align-items-center  justify-content-between border-bottom">
                            <h3 class=" fw-bold flex-fill mb-0">tache</h3>
                            <div class="col-auto d-flex">

                                <button type="button" class="btn btn-dark ms-1 " data-bs-toggle="modal"
                                    data-bs-target="#createproject"><i class="icofont-plus-circle me-2 fs-6"></i>Ajouter
                                    tache</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <table id="patient-table" class="table table-hover align-middle mb-0" style="width: 100%;">
                    <thead>
                        <tr>

                            <th>Tache</th>
                            <th>Date debut</th>
                            <th>Date fin</th>
                            <th>categorie tache</th>
                            <th>Satut</th>
                            <th>projet</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        @forelse ($taches as $tache)
                            <tr role="row  Rowdelete2{{ $tache->id }}" class="odd">
                                <td class="tach">{{ $tache->tache }}</td>

                                <td>{{ date('M d,Y', strtotime($tache->date_debut)) }}</td>
                                <input type="hidden" class="dat1" value="{{ $tache->date_debut }}">

                                <td class="">{{ date('M d,Y', strtotime($tache->date_fin)) }}</td>
                                <input type="hidden" class="dat2" value="{{ $tache->date_fin }}">

                                <td class="">{{ $tache->catTach_tach->cat_tache }}</td>
                                <input type="hidden" class="cattach" value="{{ $tache->cat_tache_id }}">
                                @if ($tache->statut_tach->statut == "COMPLETE")
                                    <td class=""><span class="badge bg-success">{{ $tache->statut_tach->statut }}</span></td>
                                    <input type="hidden" class="statu" value="{{ $tache->statut_id }}">
                                @elseif ($tache->statut_tach->statut == "En attente")
                                    <td class="" ><span class="badge bg-secondary">{{ $tache->statut_tach->statut }}</span></td>
                                    <input type="hidden" class="statu" value="{{ $tache->statut_id }}">
                                @elseif ($tache->statut_tach->statut == "Arrêtée")
                                    <td class="" ><span class="badge bg-danger">{{ $tache->statut_tach->statut }}</span></td>
                                    <input type="hidden" class="statu" value="{{ $tache->statut_id }}">
                                @elseif ($tache->statut_tach->statut == "En cours")
                                    <td class="" ><span class="badge rounded-pill bg-secondary">{{ $tache->statut_tach->statut }}</span></td>
                                    <input type="hidden" class="statu" value="{{ $tache->statut_id }}">
                                @elseif ($tache->statut_tach->statut == "Planifiée")
                                    <td class="" ><span class="badge bg-info">{{ $tache->statut_tach->statut }}</span></td>
                                    <input type="hidden" class="statu" value="{{ $tache->statut_id }}">
                                @elseif ($tache->statut_tach->statut == "Non planifiée")
                                    <td class="" ><span class="badge bg-dark">{{ $tache->statut_tach->statut }}</span></td>
                                    <input type="hidden" class="statu" value="{{ $tache->statut_id }}">
                                @else
                                <td class="">{{ $tache->statut_tach->statut }}</td>
                                <input type="hidden" class="statu" value="{{ $tache->statut_id }}">
                                @endif
                                <td class="">{{ $tache->project->projet }}</td>
                                <input type="hidden" class="proj" value="{{ $tache->projet_id }}">

                                <td class=" dt-body-right">
                                    <div class="btn-group" Statut="group" aria-label="Basic outlined example">
                                        <button type="button" class="btn btn-outline-secondary editbtn"
                                            value="{{ $tache->id }}" data-bs-toggle="modal"
                                            data-bs-target="#editproject"><i class="icofont-edit text-success"></i></button>

                                        <button type="button" attr_id2="{{ $tache->id }}" class="Bdelete_btn2"
                                            style="border: none" class="sup_statut"
                                            class="btn btn-outline-secondary deleterow"><i
                                                class="icofont-ui-delete text-danger"></i></button>


                                    </div>
                                </td>
                            </tr>

                        @empty
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>

    </div>


    <!-- Create task-->

    <div class="modal fade" id="createproject" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="createprojectlLabel"> Create Tache</h5>
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
                                <div class="col">
                                    <label for="datepickerdedone" class="form-label">projet</label>
                                    <select class="form-select" name="projet_id" aria-label="Default select Priority">
                                        @forelse ($projets as $projet)
                                            <option value="{{ $projet->id }}">{{ $projet->projet }}</option>
                                        @empty
                                            <option selected="">ajouter projet</option>
                                        @endforelse
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div class="deadline-form mb-3">

                            <div class="row">
                                <div class="col">
                                    <label for="datepickerded" class="form-label">Tache Start Date</label>
                                    <input type="date" name="date_debut" class="form-control" id="date_debut" required>
                                </div>
                                <div class="col">
                                    <label for="datepickerdedone" class="form-label">Tache End Date</label>
                                    <input type="date" name="date_fin" class="form-control" id="date_fin" required>
                                </div>
                            </div>

                        </div>
                        <div class="row g-3 mb-3">
                            {{-- <div class="col-sm">
                                <label class="form-label">Statut</label>
                                <select class="form-select" name="statut_id" multiple
                                    aria-label="Default select Priority">
                                    @forelse ($statuts as $statut)
                                        <option value="{{ $statut->id }}">{{ $statut->statut }}</option>
                                    @empty
                                        <option selected="">ajouter statut</option>
                                    @endforelse
                                </select>
                            </div> --}}
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="submit" class="btn btn-primary">Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    </div>





    <!-- Edit Client-->
    <div class="modal fade" id="editproject" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="createprojectlLabel"> Modifier Tache</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <form method="post" action="{{ route('parametre.updatetache') }}">
                    @csrf
                    <div class="modal-body">
                        <div class="mb-3">
                            <input type="text" id="id_tach" name="id" value="" hidden>

                            <label class="form-label">Tache</label>
                            <input class="form-control" name="tache_edit" type="text" id="tache_edit">
                        </div>


                        <div class="deadline-form mb-3">
                            <div class="row">
                                <div class="col">
                                    <label for="datepickerded" class="form-label">categorie tache</label>
                                    <select class="form-select" id="cat_tache_id_edit" name="cat_tache_id_edit"
                                        aria-label="Default select Priority">
                                        @forelse ($cat_taches as $cat_tache)
                                            <option value="{{ $cat_tache->id }}">{{ $cat_tache->cat_tache }}</option>
                                        @empty
                                            <option selected="">ajouter categorie tache</option>
                                        @endforelse
                                    </select>
                                </div>
                                <div class="col">
                                    <label for="datepickerdedone" class="form-label">projet</label>
                                    <select class="form-select" id="projet_id_edit"name="projet_id_edit"
                                        aria-label="Default select Priority">
                                        @forelse ($projets as $projet)
                                            <option value="{{ $projet->id }}">{{ $projet->projet }}</option>
                                        @empty
                                            <option selected="">ajouter projet</option>
                                        @endforelse
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div class="deadline-form mb-3">

                            <div class="row">
                                <div class="col">
                                    <label for="datepickerded" class="form-label">Tache Start Date</label>
                                    <input type="date" name="date_debut_edit" class="form-control"
                                        id="date_debut_edit">
                                </div>
                                <div class="col">
                                    <label for="datepickerdedone" class="form-label">Tache End Date</label>
                                    <input type="date" name="date_fin_edit" class="form-control" id="date_fin_edit">
                                </div>
                            </div>

                        </div>
                        <div class="row g-3 mb-3">
                            <div class="col-sm">
                                <label class="form-label">Statut</label>
                                <select class="form-select" id="statut_id_edit" name="statut_id_edit" multiple
                                    aria-label="Default select Priority">
                                    @forelse ($statuts as $statut)
                                        <option value="{{ $statut->id }}">{{ $statut->statut }}</option>
                                    @empty
                                        <option selected="">ajouter statut</option>
                                    @endforelse
                                </select>
                            </div>
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="submit" class="btn btn-primary">Modifier</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
@endsection
@section('scripts')

    <script>
        $(document).ready(function() {
            $('#patient-table')
                .addClass('nowrap')
                .dataTable({
                    responsive: true,
                    columnDefs: [{
                        targets: [-1, -3],
                        className: 'dt-body-right'
                    }]
                });
        });

        $("#patient-table").on("click", ".editbtn", function() {
            $id = $(this).val();
            $tache = $(this).parent().parent().parent().find(".tach").text();
            $date1 = $(this).parent().parent().parent().find(".dat1").val();
            $date2 = $(this).parent().parent().parent().find(".dat2").val();
            $catego = $(this).parent().parent().parent().find(".cattach").val();
            $statut = $(this).parent().parent().parent().find(".statu").val();
            $projet = $(this).parent().parent().parent().find(".proj").val();

            $date1 = $date1.split(' ')[0];
            $date2 = $date2.split(' ')[0];
            $("#id_tach").val($id);
            $("#tache_edit").val($tache);
            $("#date_debut_edit").val($date1);
            $("#date_fin_edit").val($date2);
            $("#cat_tache_id_edit").val($catego);
            $("#statut_id_edit").val($statut);
            $("#projet_id_edit").val($projet);

        })


        $(document).on('click', '.Bdelete_btn2', function(e) {
            e.preventDefault();
            var offer_id = $(this).attr('attr_id2');
            if (confirm("do you want to delete this file?")) {
                $.ajax({
                    type: 'post',
                    url: "{{ route('parametre.deletetache') }}",
                    data: {
                        '_token': "{{ csrf_token() }}",
                        'id': offer_id,
                    },
                    success: function(data) {
                        if (data.status == true) {
                            $('#success_msg').fadeIn(1000);
                            $('#success_msg').fadeOut(6000);
                        }
                        $('.Rowdelete2' + data.id).remove();
                    },
                    error: function(reject) {

                    }
                });
            }
        });
    </script>
    <script>
        document.getElementById("date_debut_edit").onchange = function() {
            var input = document.getElementById("date_fin_edit");
            input.setAttribute("min", this.value);
        }

        document.getElementById("date_debut").onchange = function() {
            var input = document.getElementById("date_fin");
            input.setAttribute("min", this.value);
        }
    </script>
@endsection
