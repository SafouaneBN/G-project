@extends("layouts.master")
@section('parametre','active')
@section("content")

        <!-- Body: Body -->
        <div class="body d-flex py-lg-3 py-md-2">
            <div class="container-xxl">
                <div class="row align-items-center">
                    <div class="border-0 mb-4">
                        <div class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                            <h3 class="fw-bold mb-0">categorie tache</h3>
                            <div class="col-auto d-flex w-sm-100">
                                <button type="button" class="btn btn-dark btn-set-task w-sm-100" data-bs-toggle="modal" data-bs-target="#depadd"><i class="icofont-plus-circle me-2 fs-6"></i>Ajouter role</button>
                            </div>
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

                                            <th>libelle</th>

                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    @forelse ($cat_taches as $cat_tache)

                                    <tbody>
                                        <tr class="Rowdelete{{ $cat_tache->id }}">


                                           <td class="libelle">{{$cat_tache->cat_tache}}</td>

                                            <td>
                                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                    <button class="edit_cat_tache" value="{{$cat_tache->id}}" style="border: none" type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#depedit"><i class="icofont-edit text-success"></i></button>
                                                    <button type="button"  attr_id ="{{ $cat_tache->id }}"class ="Bdelete_btn" style="border: none" class="sup_role" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
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
                </div><!-- Row End -->
            </div>
        </div>


        <!-- Add Department-->
        <div class="modal fade" id="depadd" tabindex="-1"  aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="depaddLabel">Ajouter categorie tache</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form method="post" action="{{ route('parametre.addcat_tache') }}">
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

        <!-- Edit Department-->
        <div class="modal fade" id="depedit" tabindex="-1"  aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="depeditLabel">Modifier categorie tache</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('parametre.updatecat_tache') }}" class="forms-sample" method="post">
                    @csrf
                <div class="modal-body">

                    <div class="deadline-form">

                            <div class="row g-3 mb-3">

                              <div class="col-sm-6">
                                <input type="text" id="id_cat_tache" name="id" value="" hidden>
                                <label for="deptwo48" class="form-label">Libelle</label>
                                <input type="text" name="libelle" class="form-control" id="libelle_edit" value="">
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


@endsection
@section("scripts")
<script>
    $("#myProjectTable").on("click",".edit_cat_tache",function(){
        $id=$(this).val();
        $libelle=$(this).parent().parent().parent().find(".libelle").text();
        $("#id_cat_tache").val($id);
        $("#libelle_edit").val($libelle);

    })



        $(document).on('click','.Bdelete_btn',function (e){
            e.preventDefault();
            var offer_id = $(this).attr('attr_id');
            if(confirm("do you want to delete this file?")) {
                $.ajax({
                    type: 'post',
                    url: "{{route('parametre.deletecat_tache')}}",
                    data: {
                        '_token': "{{csrf_token()}}",
                        'id': offer_id,
                    },
                    success: function (data) {
                        if (data.status == true) {
                            $('#success_msg').fadeIn(1000);
                            $('#success_msg').fadeOut(6000);
                        }
                        $('.Rowdelete' + data.id).remove();
                    }, error: function (reject) {

                    }
                });
            }
        });
    </script>
@endsection
