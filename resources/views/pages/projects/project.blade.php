@extends('layouts.master')
@section('prot', 'active')
@section('content')
    <!-- main body area -->
    <!-- Body: Body -->
    <div class="card mb-3">
        <div class="card-header py-3  bg-transparent border-bottom-0">
            <div class="row clearfix">
                <div class="col-md-12">
                    <div class="card border-0 mb-4 no-bg">
                        <div class="card-header py-3 px-0 d-flex align-items-center  justify-content-between border-bottom">
                            <h3 class=" fw-bold flex-fill mb-0">Projet</h3>
                            <div class="col-auto d-flex">
                                @if (Auth::user()->role_id == 3)
                                    <button type="button" class="btn btn-dark ms-1 " data-bs-toggle="modal"
                                        data-bs-target="#createproject"><i class="icofont-plus-circle me-2 fs-6"></i>Ajouter
                                        Projet</button>
                                @endif

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <table id="patient-table" class="table table-hover align-middle mb-0" style="width: 100%;">
                    <thead>
                        <tr>

                            <th>projet</th>
                            <th>Date projet</th>
                            <th>Opportunite</th>
                            <th>categorie projet</th>
                            <th>Statut</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        @forelse ($projets as $projet)
                            <tr role="row  Rowdelete2{{ $projet->id }}" class="odd">
                                <td class="">{{ $projet->projet }}</td>
                                <input type="hidden" class="proj" value="{{ $projet->projet }}">

                                <td>{{ date('M d,Y', strtotime($projet->date_projet)) }}</td>
                                <input type="hidden" class="datp" value="{{ $projet->date_projet }}">

                                <td class="">{{ $projet->opportunite_projet->opportunite }}</td>
                                <input type="hidden" class="opportu" value="{{ $projet->opportunite_id }}">

                                <td class="">{{ $projet->catProjet_projet->libelle }}</td>
                                <input type="hidden" class="catpro" value="{{ $projet->catpro_id }}">

                                <input type="hidden" class="descp" value="{{ $projet->description }}">
                                @if ($projet->statut_projet->statut == 'COMPLETE')
                                    <td class=""><span
                                            class="badge bg-success">{{ $projet->statut_projet->statut }}</span></td>
                                    <input type="hidden" class="statu" value="{{ $projet->statu_id }}">
                                @elseif ($projet->statut_projet->statut == 'En attente')
                                    <td class=""><span
                                            class="badge bg-secondary">{{$projet->statut_projet->statut }}</span></td>
                                    <input type="hidden" class="statu" value="{{ $projet->statu_id }}">
                                @elseif ($projet->statut_projet->statut == 'Arrêtée')
                                    <td class=""><span
                                            class="badge bg-danger">{{ $projet->statut_projet->statut }}</span></td>
                                    <input type="hidden" class="statu" value="{{ $projet->statu_id }}">
                                @elseif ($projet->statut_projet->statut == 'En cours')
                                    <td class=""><span
                                            class="badge rounded-pill bg-secondary">{{ $projet->statut_projet->statut }}</span>
                                    </td>
                                    <input type="hidden" class="statu" value="{{ $projet->statu_id }}">
                                @elseif ($projet->statut_projet->statut == 'Planifiée')
                                    <td class=""><span class="badge bg-info">{{ $projet->statut_projet->statut }}</span>
                                    </td>
                                    <input type="hidden" class="statu" value="{{ $projet->statu_id }}">
                                @elseif ($projet->statut_projet->statut == 'Non planifiée')
                                    <td class=""><span class="badge bg-dark">{{ $projet->statut_projet->statut }}</span>
                                    </td>
                                    <input type="hidden" class="statu" value="{{ $projet->statu_id }}">
                                @else
                                    <td class="">{{ $projet->statut_projet->statut }}</td>
                                    <input type="hidden" class="statu" value="{{ $projet->statu_id }}">
                                @endif
                                <td class=" dt-body-right">
                                    @if (Auth::user()->role_id == 3)
                                        <button type="button" class="btn btn-outline-secondary editbtn"
                                            value="{{ $projet->id }}" data-bs-toggle="modal"
                                            data-bs-target="#editproject"><i class="icofont-edit text-success"></i></button>
                                    @endif
                                    <a type="button" href="{{ route('projet.task', $projet->id) }}" style="border: none"
                                        class="sup_statut" class="btn btn-outline-secondary deleterow"><i
                                            class="icofont-eye-alt "></i>
                                    </a>
                                </td>
                            </tr>

                        @empty
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>

    </div>
    <!-- Create Project-->
    <div class="modal fade" id="createproject" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="createprojectlLabel"> Ajouter Projet</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form method="post" action="{{ route('parametre.addprojet') }}">
                    @csrf
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="exampleFormControlInput77" class="form-label"> Nom Projet </label>
                            <input type="text" class="form-control" id="exampleFormControlInput77" name="projet"
                                placeholder="Explain what the Project Name" required>
                        </div>


                        <div class="row g-3 mb-3">

                            <div class="col-sm">
                                <label class="form-label">categorie Project</label>
                                <select class="form-select" name="categorie"
                                    aria-label="Default select Project Category">
                                    @forelse ($cat_projets as $cat_projet)
                                        <option value="{{ $cat_projet->id }}">{{ $cat_projet->libelle }}</option>
                                    @empty
                                        <option selected="">ajouter categorie</option>
                                    @endforelse
                                </select>
                            </div>

                            <div class="col-sm">
                                <label for="formFileMultipleone" class="form-label">Opportunite</label>
                                <select class="form-select" name="opportunite" aria-label="Default select Priority">
                                    @forelse ($opportunites as $opportunite)
                                        <option value="{{ $opportunite->id }}">{{ $opportunite->opportunite }}</option>
                                    @empty
                                        <option selected="">ajouter opportunite</option>
                                    @endforelse
                                </select>
                            </div>
                        </div>

                        <div class="deadline-form">

                            <div class="row g-3 mb-3">

                                <label for="datepickerded" class="form-label">Date Projet</label>
                                <input type="date" class="form-control" name="dateP" id="datepickerded" required>

                            </div>


                        </div>


                        <div class="mb-3">
                            <label for="exampleFormControlTextarea78" class="form-label">Description</label>
                            <textarea class="form-control" name="desc" id="exampleFormControlTextarea78" rows="3"
                                placeholder="Add any extra details about the request"></textarea>
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

    <!-- Edit Project-->
    <div class="modal fade" id="editproject" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="editprojectLabel"> Edit Project</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form method="post" action="{{ route('parametre.updateprojet') }}">
                    @csrf
                    <div class="modal-body">
                        <div class="mb-3">
                            <input type="text" id="id_projet" name="id" value="" hidden>

                            <label for="exampleFormControlInput77" class="form-label"> Nom Projet </label>
                            <input type="text" class="form-control" name="projet_edit" id="projet_edit"
                                placeholder="Explain what the Project Name" required>
                        </div>


                        <div class="row g-3 mb-3">

                            <div class="col-sm">
                                <label class="form-label">categorie Project</label>
                                <select class="form-select" name="categorie_edit" id="categorie_edit"
                                    aria-label="Default select Project Category">
                                    @forelse ($cat_projets as $cat_projet)
                                        <option value="{{ $cat_projet->id }}">{{ $cat_projet->libelle }}</option>
                                    @empty
                                        <option selected="">ajouter categorie</option>
                                    @endforelse
                                </select>
                            </div>

                            <div class="col-sm">
                                <label for="formFileMultipleone" class="form-label">Opportunite</label>
                                <select class="form-select" name="opportunite_edit" id="opportunite_edit"
                                    aria-label="Default select Priority">
                                    @forelse ($opportunites as $opportunite)
                                        <option value="{{ $opportunite->id }}">{{ $opportunite->opportunite }}</option>
                                    @empty
                                        <option selected="">ajouter opportunite</option>
                                    @endforelse
                                </select>
                            </div>
                        </div>

                        <div class="deadline-form">

                            <div class="row g-3 mb-3">

                                <label for="datepickerded" class="form-label">Date Projet</label>
                                <input type="date" class="form-control" name="dateP_edit" id="dateP_edit" required>

                            </div>


                        </div>


                        <div class="mb-3">
                            <label for="exampleFormControlTextarea78" class="form-label">Description</label>
                            <textarea class="form-control" name="desc_edit" id="desc_edit" rows="3"
                                placeholder="Add any extra details about the request"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="submit" class="btn btn-primary">Modifer</button>
                    </div>

                </form>

            </div>
        </div>
    </div>

    <!-- Modal  Delete Folder/ File-->
    <div class="modal fade" id="deleteproject" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="deleteprojectLabel"> Delete item Permanently?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body justify-content-center flex-column d-flex">
                    <i class="icofont-ui-delete text-danger display-2 text-center mt-2"></i>
                    <p class="mt-4 fs-5 text-center">You can only delete this item Permanently</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-danger color-fff">Delete</button>
                </div>
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
            $dateP = $(this).parent().parent().parent().find(".datp").val();
            $categorie = $(this).parent().parent().parent().find(".catpro").val();
            $desc = $(this).parent().parent().parent().find(".descp").val();
            $opportunite = $(this).parent().parent().parent().find(".opportu").val();
            $projet = $(this).parent().parent().parent().find(".proj").val();
            $dateP = $dateP.split(' ')[0];
            $("#id_projet").val($id);
            $("#projet_edit").val($projet);
            $("#dateP_edit").val($dateP);
            $("#opportunite_edit").val($opportunite);
            $("#categorie_edit").val($categorie);
            $("#desc_edit").val($desc);

        })
    </script>
@endsection
