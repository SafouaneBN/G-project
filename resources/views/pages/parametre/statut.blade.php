@extends('layouts.master')
@section('statut', 'active')
@section('content')

    <!-- Body: Body -->
    <div class="body d-flex py-lg-3 py-md-2">
        <div class="container-xxl">
            <div class="row clearfix g-3">
                {{-- category statuts --}}
                <div class="col-sm-6">
                    <div class="row align-items-center">
                        <div class="border-0 mb-4">
                            <div
                                class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                <h3 class="fw-bold mb-0">Categorie Statut</h3>
                                <div class="col-auto d-flex w-sm-100">
                                    <button type="button" class="btn btn-dark btn-set-task w-sm-100" data-bs-toggle="modal"
                                        data-bs-target="#depadd"><i class="icofont-plus-circle me-2 fs-6"></i>Ajouter
                                        Categorie statut</button>
                                </div>
                            </div>
                        </div>
                    </div> <!-- Row end  -->


                    <div class="card mb-3">
                        {{-- <div class="card-body basic-custome-color">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>

                                            <th>libelle</th>

                                            <th>Actions</th>
                                        </tr>
                                    </thead>


                                  </table>
                            </div>
                        </div> --}}
                        <div class="card-body basic-custome-color">
                            <div class="table-responsive">

                                <table id="myProjectTable" class="table" >
                                    <thead>
                                        <tr>

                                            <th>libelle</th>

                                            <th>Actions</th>
                                        </tr>
                                    </thead>

                                        <tbody>
                                            @forelse ($cat_statuts as $statut)
                                            <tr class="Rowdelete{{ $statut->id }}">


                                                <td class="libelle">{{ $statut->libelle }}</td>

                                                <td>
                                                    <div class="btn-group" Statut="group"
                                                        aria-label="Basic outlined example">
                                                        <button class="edit_statut" value="{{ $statut->id }}"
                                                            style="border: none" type="button"
                                                            class="btn btn-outline-secondary" data-bs-toggle="modal"
                                                            data-bs-target="#depedit"><i
                                                                class="icofont-edit text-success"></i></button>
                                                        <button type="button" attr_id="{{ $statut->id }}"
                                                            class="Bdelete_btn" style="border: none" class="sup_statut"
                                                            class="btn btn-outline-secondary deleterow"><i
                                                                class="icofont-ui-delete text-danger"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        @empty
                                            <tr>
                                                <td>no Record</td>
                                            </tr>
                                    @endforelse
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


                {{-- statuts --}}
                <div class="col-sm-6">

                    <div class="row align-items-center">
                        <div class="border-0 mb-4">
                            <div
                                class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                <h3 class="fw-bold mb-0"> Statut</h3>
                                <div class="col-auto d-flex w-sm-100">
                                    <button type="button" class="btn btn-dark btn-set-task w-sm-100" data-bs-toggle="modal"
                                        data-bs-target="#depadd2"><i class="icofont-plus-circle me-2 fs-6"></i>Ajouter
                                        Statut</button>
                                </div>
                            </div>
                        </div>
                    </div> <!-- Row end  -->

                    <div class="card mb-3">
                        <div class="card-body">
                            <table id="myProjectTable2" class="table table-hover align-middle mb-0" style="width:100%">
                                <thead>
                                    <tr>

                                        <th>statut</th>
                                        <th>categorie</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                    <tbody>
                                        @forelse ($statuts as $statu)
                                        <tr class="Rowdelete2{{ $statu->id }}">


                                            <td class="statut">{{ $statu->statut }}</td>
                                            <td class="cat_statu">{{ $statu->catStatu_statut->libelle }}</td>

                                            <td>
                                                <div class="btn-group" Statut="group" aria-label="Basic outlined example">
                                                    <button class="edit_statut2" value="{{ $statu->id }}"
                                                        style="border: none" type="button"
                                                        class="btn btn-outline-secondary" data-bs-toggle="modal"
                                                        data-bs-target="#depedit2"><i
                                                            class="icofont-edit text-success"></i></button>
                                                    <button type="button" attr_id2="{{ $statu->id }}"
                                                        class="Bdelete_btn2" style="border: none" class="sup_statut"
                                                        class="btn btn-outline-secondary deleterow"><i
                                                            class="icofont-ui-delete text-danger"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    @empty
                                        <tr>
                                            <td>no Record</td>
                                        </tr>
                                @endforelse
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>


    <!-- Add Department 1-->
    <div class="modal fade" id="depadd" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="depaddLabel">Ajouter Categorie Statut</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form method="post" action="{{ route('parametre.cat_addStatut') }}">
                    @csrf
                    <div class="modal-body">
                        <div class="deadline-form">
                            <div class="row g-3 mb-3">
                                <div class="col-sm-6">
                                    <label for="Libelle" class="form-label">Libelle</label>
                                    <input type="text" name="libelle" class="form-control" id="Libelle">
                                </div>
                            </div>
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
    <!-- Add Department 2-->

    <div class="modal fade" id="depadd2" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="depaddLabel">Ajouter Statut</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form method="post" action="{{ route('parametre.addStatut') }}">
                    @csrf
                    <div class="modal-body">
                        <div class="deadline-form">
                            <div class=" mb-3">

                                <label for="Libelle" class="form-label">Libelle</label>
                                <input type="text" name="lstatu" class="form-control" id="lstatu">


                            </div>
                            <div class=" mb-3">

                                <label for="Libelle" class="form-label">Categorie Statut</label>
                                <select class="form-select" name="ca_statut" aria-label="Default select Priority">
                                    @forelse ($cat_statuts as $statut)
                                        <option value="{{ $statut->id }}">{{ $statut->libelle }}</option>
                                    @empty
                                        <option selected="">ajouter category statuts</option>
                                    @endforelse
                                </select>


                            </div>
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


    <!-- Edit Department-->
    <div class="modal fade" id="depedit" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="depeditLabel">Modifier Statut</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('parametre.cat_update') }}" class="forms-sample" method="post">
                    @csrf
                    <div class="modal-body">

                        <div class="deadline-form">

                            <div class="row g-3 mb-3">

                                <div class="col-sm-6">
                                    <input type="text" id="id_statut" name="id" value="" hidden>
                                    <label for="deptwo48" class="form-label">Libelle</label>
                                    <input type="text" name="libelle" class="form-control" id="libelle_edit"
                                        value="">
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="submit" class="btn btn-primary">Enregister</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Edit Department2-->
    <div class="modal fade" id="depedit2" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="depeditLabel">Modifier Statut</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('parametre.update') }}" class="forms-sample" method="post">
                    @csrf
                    <div class="modal-body">
                        <div class="deadline-form">
                            <div class=" mb-3">
                                <input type="text" id="id_statuts" name="id" value="">

                                <label for="Libelle" class="form-label">Libelle</label>
                                <input type="text" name="edit_lstatu" class="form-control" id="edit_lstatu">


                            </div>
                            <div class=" mb-3">

                                <label for="Libelle" class="form-label">Categorie Statut</label>
                                <select class="form-select" name="c_statut" id=c_statut
                                    aria-label="Default select Priority">
                                    @forelse ($cat_statuts as $statut)
                                        <option value="{{ $statut->id }}">{{ $statut->libelle }}</option>
                                    @empty
                                        <option selected="">ajouter category statuts</option>
                                    @endforelse
                                </select>


                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="submit" class="btn btn-primary">Enregister</button>
                    </div>
                </form>
            </div>
        </div>
    </div>


@endsection
@section('scripts')
    <script>
        $("#myProjectTable").on("click", ".edit_statut", function() {
            $id = $(this).val();
            $libelle = $(this).parent().parent().parent().find(".libelle").text();
            $("#id_statut").val($id);
            $("#libelle_edit").val($libelle);

        })


        $(document).on('click', '.Bdelete_btn', function(e) {
            e.preventDefault();
            var offer_id = $(this).attr('attr_id');
            if (confirm("do you want to delete this file?")) {
                $.ajax({
                    type: 'post',
                    url: "{{ route('parametre.cat_delete') }}",
                    data: {
                        '_token': "{{ csrf_token() }}",
                        'id': offer_id,
                    },
                    success: function(data) {
                        if (data.status == true) {
                            $('#success_msg').fadeIn(1000);
                            $('#success_msg').fadeOut(6000);
                        }
                        $('.Rowdelete' + data.id).remove();
                    },
                    error: function(reject) {

                    }
                });
            }
        });

        ///////



        $("#myProjectTable2").on("click", ".edit_statut2", function() {
            $id = $(this).val();
            $statu = $(this).parent().parent().parent().find(".statut").text();
            $libelle = $(this).parent().parent().parent().find(".cat_statu").text();
            $("#id_statuts").val($id);
            $("#edit_lstatu").val($statu);
            $("#c_statut").val($libelle);

        })



        $(document).on('click', '.Bdelete_btn2', function(e) {
            e.preventDefault();
            var offer_id = $(this).attr('attr_id2');
            if (confirm("do you want to delete this file?")) {
                $.ajax({
                    type: 'post',
                    url: "{{ route('parametre.delete') }}",
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
@endsection
