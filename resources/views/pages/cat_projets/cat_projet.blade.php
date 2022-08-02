@extends("layouts.master")
@section('cat_projet','active')
@section("content")





<div class="card mb-3">
    <div class="card-header py-3  bg-transparent border-bottom-0">
        <div class="row clearfix">
            <div class="col-md-12">
                <div class="card border-0 mb-4 no-bg">
                    <div class="card-header py-3 px-0 d-flex align-items-center  justify-content-between border-bottom">
                        <h3 class=" fw-bold flex-fill mb-0">Categorie</h3>
                        <div class="col-auto d-flex">

                            <button type="button" class="btn btn-dark ms-1 " data-bs-toggle="modal" data-bs-target="#createproject"><i class="icofont-plus-circle me-2 fs-6"></i>Ajouter Categorie</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div class="card-body">
        <table id="patient-table" class="table table-hover align-middle mb-0" style="width: 100%;">
            <thead>
                <tr>


                    <th>categorie</th>
                    <th>Action</th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
                @forelse ($cat_projets as $cat_projet)
                <tr role="row  Rowdelete2{{ $cat_projet->id }}">

                    <td class="categ">{{ $cat_projet->libelle }}</td>
                    <td><div class="btn-group" Statut="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-outline-secondary editbtn" value="{{ $cat_projet->id }}" data-bs-toggle="modal" data-bs-target="#editproject"><i class="icofont-edit text-success"></i></button>

                        <button type="button" attr_id2="{{ $cat_projet->id }}" class="Bdelete_btn2"
                            style="border: none" class="sup_statut"
                            class="btn btn-outline-secondary deleterow"><i
                                class="icofont-ui-delete text-danger"></i></button>


                    </div></td>
                    <td></td>


                </tr>
                @empty

                @endforelse


            </tbody>
        </table>
    </div>
</div>







         <!-- Create Client-->
         <div class="modal fade" id="createproject" tabindex="-1"  aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title  fw-bold" id="createprojectlLabel"> Ajouter categorie projet</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form method="post" action="{{ route('parametre.addcat_projet') }}">
                        @csrf
                        <div class="modal-body">

                            <div class="mb-3">

                                <div class="col-sm">
                                    <label for="exampleFormControlInput977" class="form-label">categorie</label>
                                    <input type="text" class="form-control" name="categorie"
                                        id="exampleFormControlInput977" placeholder="">
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
        </div>




           <!-- Edit Client-->
           <div class="modal fade" id="editproject" tabindex="-1"  aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title  fw-bold" id="createprojectlLabel"> Modifier categorie projet</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="{{ route('parametre.updatecat_projet') }}" class="forms-sample" method="post">
                        @csrf
                        <div class="modal-body">


                            <div class="mb-3">

                                <div class="col-sm">
                                    <input type="text" id="id_categorie" name="id" value="" hidden >

                                    <label for="exampleFormControlInput977" class="form-label">categorie</label>
                                    <input type="text" class="form-control" id="categorie_edit" name="categorie_edit"
                                        id="exampleFormControlInput977" placeholder="">
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
            $libelle = $(this).parent().parent().parent().find(".categ").text();




            $("#id_categorie").val($id);
            $("#categorie_edit").val($libelle);


        })


        $(document).on('click','.Bdelete_btn2',function (e){
            e.preventDefault();
            var offer_id = $(this).attr('attr_id2');
            if(confirm("do you want to delete this file?")) {
                $.ajax({
                    type: 'post',
                    url: "{{route('parametre.deletecat_projet')}}",
                    data: {
                        '_token': "{{csrf_token()}}",
                        'id': offer_id,
                    },
                    success: function (data) {
                        if (data.status == true) {
                            $('#success_msg').fadeIn(1000);
                            $('#success_msg').fadeOut(6000);
                        }
                        $('.Rowdelete2' + data.id).remove();
                    }, error: function (reject) {

                    }
                });
            }
        });

    </script>
@endsection

