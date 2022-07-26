@extends("layouts.master")
@section('client','active')
@section("content")

        <!-- Body: Body -->
        <div class="body d-flex py-lg-3 py-md-2">
            <div class="container-xxl">
                <div class="row clearfix">
                    <div class="col-md-12">
                        <div class="card border-0 mb-4 no-bg">
                            <div class="card-header py-3 px-0 d-flex align-items-center  justify-content-between border-bottom">
                                <h3 class=" fw-bold flex-fill mb-0">Clients</h3>
                                <div class="col-auto d-flex">

                                    <button type="button" class="btn btn-dark ms-1 " data-bs-toggle="modal" data-bs-target="#createproject"><i class="icofont-plus-circle me-2 fs-6"></i>Add Client</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- Row End -->
                <div class="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 row-deck py-1 pb-4">
                    @forelse ($clients as $client)

                    <div class="col" class="Rowdelete{{ $client->id }}">

                        <div class="card teacher-card">
                            <div class="card-body  d-flex">
                                <div class="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                                    <img src="{{ asset('assets/images/lg/avatar3.jpg') }}" alt="" class="avatar xl rounded-circle img-thumbnail shadow-sm">
                                    <div class="about-info d-flex align-items-center mt-1 justify-content-center flex-column">

                                        <div class="btn-group mt-2" role="group" aria-label="Basic outlined example">
                                            <button type="button" class="btn btn-outline-secondary editbtn" value="{{ $client->id }}" data-bs-toggle="modal" data-bs-target="#editproject"><i class="icofont-edit text-success"></i></button>
                                            <button type="button"  attr_id ="{{ $client->id }}"class ="Bdelete_btn" style="border: none" class="sup_role" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
                                    <h1 class="mb-0 fw-bold d-block fs-3 mt-2 fulln">{{$client->full_name}}</h1>
                                    <h6 class="mb-0 fw-bold d-block fs-9 mt-2 em">{{$client->email}}</h6>
                                    <input type="hidden" class="pa" value="{{$client->pays}}">
                                    <input type="hidden" class="vil"  value="{{$client->ville}}">
                                    <input type="hidden" class="te"  value="{{$client->telephone}}">
                                    <input type="hidden" class="ty"  value="{{$client->type_client}}">




                                </div>
                            </div>
                        </div>
                    </div>

                    @empty
                    @endforelse
                </div>
            </div>
        </div>

               <!-- Create Client-->
       <div class="modal fade" id="createproject" tabindex="-1"  aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="createprojectlLabel"> Ajouter Client</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form method="post" action="{{ route('parametre.addClient') }}">
                    @csrf
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="exampleFormControlInput977" class="form-label">Type client</label>
                                    <select  id="calcOption" name="type_client"  class="form-select"  >
                                        <option value="pp" class="pp">Persone particulier</option>
                                        <option value="pm" class="pm">Persone morale</option>
                                    </select>

                        </div>

                        <div class="mb-3">
                            <div class="col-sm">
                                <label for="exampleFormControlInput877"  id="labelChanged"  class="form-label"></label>
                                <input type="text" class="form-control" name="full_name" id="exampleFormControlInput877" placeholder="">
                            </div>
                            <div class="col-sm">
                            <label for="exampleFormControlInput977" class="form-label">email</label>
                            <input type="email" class="form-control" name="email" id="exampleFormControlInput977" placeholder="">
                        </div>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput977" class="form-label">Telephone</label>
                            <input type="text" class="form-control" name="telephone" id="exampleFormControlInput977" placeholder="">

                        </div>

                        <div class="row g-3 mb-3">
                            <div class="col-sm">
                                <label for="exampleFormControlInput977" class="form-label">ville</label>
                                <input type="text" class="form-control" name="ville" id="exampleFormControlInput977" placeholder="">
                            </div>
                            <div class="col-sm">
                                <label for="exampleFormControlInput977" class="form-label">pays</label>
                                <input type="text" class="form-control" name="pays" id="exampleFormControlInput977" placeholder="">
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

               <!-- Edit Client-->
               <div class="modal fade" id="editproject" tabindex="-1"  aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title  fw-bold" id="createprojectlLabel"> Modifier Client</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form method="post" action="{{ route('parametre.updateClient') }}">
                            @csrf
                            <div class="modal-body">
                                <div class="mb-3">
                                    <input type="text" id="id_client" name="id" value="" hidden>
                                    <label for="exampleFormControlInput977" class="form-label">Type client</label>
                                    <select  id="type_edit2" name="type_edit"  class="form-select  calcOption2" >
                                        <option value="pp" class="pp">Persone particulier</option>
                                        <option value="pm" class="pm">Persone morale</option>
                                    </select>

                                </div>

                                <div class="mb-3">
                                    <div class="col-sm">
                                        <label for="exampleFormControlInput877"  id="labelChanged2" class="form-label"></label>
                                        <input type="text" class="form-control" name="full_name_edit" id="full_name_edit" placeholder="">
                                    </div>
                                    <div class="col-sm">
                                    <label for="exampleFormControlInput977" class="form-label">email</label>
                                    <input type="email" class="form-control" name="email_edit" id="email_edit" placeholder="">
                                </div>
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlInput977" class="form-label">Telephone</label>
                                    <input type="text" class="form-control" name="tele_edit" id="tele_edit" placeholder="">

                                </div>

                                <div class="row g-3 mb-3">
                                    <div class="col-sm">
                                        <label for="exampleFormControlInput977" class="form-label">ville</label>
                                        <input type="text" class="form-control" name="ville_edit" id="ville_edit" placeholder="">
                                    </div>
                                    <div class="col-sm">
                                        <label for="exampleFormControlInput977" class="form-label">pays</label>
                                        <input type="text" class="form-control" name="pays_edit" id="pays_edit" placeholder="">
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
@section("scripts")
<script>
    $(".editbtn").click(function(){

        $id=$(this).val();
        $full_name=$(this).parent().parent().parent().parent().find(".fulln").text();
        $email=$(this).parent().parent().parent().parent().find(".em").text();
        $type=$(this).parent().parent().parent().parent().find(".ty").val();
        $tele=$(this).parent().parent().parent().parent().find(".te").val();
        $pays=$(this).parent().parent().parent().parent().find(".pa").val();
        $ville=$(this).parent().parent().parent().parent().find(".vil").val();
        $("#id_client").val($id);
        $("#full_name_edit").val($full_name);
        $("#ville_edit").val($ville);
        $("#pays_edit").val($pays);
        $(".calcOption2").val($type).change();
        $("#tele_edit").val($tele);
        $("#email_edit").val($email);
    })


        $(document).on('click','.Bdelete_btn',function (e){
            e.preventDefault();
            var offer_id = $(this).attr('attr_id');
            if(confirm("do you want to delete this file?")) {
                $.ajax({
                    type: 'post',
                    url: "{{route('parametre.deleteClient')}}",
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




        var newLabel = 'Nom complet';
$('#calcOption').on('change', function(){
    $('#labelChanged').text(newLabel); //Change the text before changing the value
    switch(this.value){

        case 'pm':
            newLabel = 'Nom complet';
            break;
        case 'pp':
            newLabel = 'Resaux social';
            break;
    }
}).trigger('change');
////////////
var newLabel = 'Nom complet';

$('.calcOption2').on('change', function(){
    $('#labelChanged2').text(newLabel); //Change the text before changing the value
    switch(this.value){

        case 'pm':
            newLabel = 'Nom complet';
            break;
        case 'pp':
            newLabel = 'Resaux social';
            break;
    }
}).trigger('change');
</script>
@endsection
