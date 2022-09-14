@extends('layouts.master')
@section('Chat', 'active')
@section('content')
 <!-- Body: Body -->
 <div class="main">
    <div class="body d-flex">
        <div class="container-xxl p-0">
            <div class="row g-0">
                <div class="col-12 d-flex">
                <!-- Card: -->
                    <div class="card card-chat border-right border-top-0 border-bottom-0  w380">
                        <div class="px-4 py-3 py-md-4">


                            <div class="nav nav-pills justify-content-end text-center" role="tablist">

                                <button class=" btn btn-dark ms-1 edit_role styButton" style="border: none"
                                type="button" data-bs-toggle="modal" data-bs-target="#depedit"><i
                                    class="icofont-plus-circle me-2 fs-6"></i></button>
                            </div>
                        </div>

                        <div class="tab-content border-top">
                            <div class="tab-pane fade show active" id="chat-recent" role="tabpanel">
                                <ul class="list-unstyled list-group list-group-custom list-group-flush mb-0">
                                    @forelse ($conversations as $conversation)
                                        <li class="list-group-item px-md-4 py-3 py-md-4">
                                            <a href="javascript:void(0);" class="d-flex">
                                                <img class="avatar rounded-circle" src="{{ asset('assets/images/xs/avatar6.jpg') }}" alt="">
                                                <div class="flex-fill ms-3 text-truncate">
                                                    <h6 class="d-flex justify-content-between mb-0"><span>{{ $conversation->name }}</span>
                                                    <small class="msg-time">{{ Illuminate\Support\Carbon::parse($conversation->messages->last()->created_at)->format('H:m') }}</small></h6>
                                                    <span class="text-muted">{{ $conversation->messages->last()->body }}</span>
                                                </div>
                                            </a>
                                        </li>
                                    @empty

                                    @endforelse
                                </ul>
                            </div>

                        </div>
                    </div>
                    <!-- Card: -->
                    <div class="card card-chat-body border-0  w-100 px-4 px-md-5 py-3 py-md-4">


                            <!-- Chat: Header -->
                            <div class="chat-header d-flex justify-content-between align-items-center border-bottom pb-3">
                                <div class="d-flex align-items-center">
                                    <a href="index.html" title="Home"><i class="icofont-arrow-left fs-4"></i></a>
                                    <a href="javascript:void(0);" title="">
                                        <img class="avatar rounded" src="{{ asset('assets/images/xs/avatar2.jpg') }}" alt="avatar">
                                    </a>
                                    <div class="ms-3">
                                        <h6 class="mb-0">{{ $conversation->name }}</h6>
                                        <small class="text-muted">Last seen: 3 hours ago</small>


                                        <span style="visibility: hidden" id="myEmail">{{Auth::user()->email}}</span>
                                        <span style="visibility: hidden" id="conversationUUid">{{$conversation->uuid}}</span>
                                    </div>
                                </div>

                            </div>


                            <!-- Chat: body -->
                            <ul class="chat-history list-unstyled mb-0 py-lg-5 py-md-4 py-3 flex-grow-1" id="conversationH">

{{--
                                @forelse ($messages as $message)
                                    @if($message->email != Auth::user()->email)
                                            <!-- Chat: left -->
                                            <li class="mb-3 d-flex flex-row align-items-end">
                                                <div class="max-width-70">
                                                    <div class="user-info mb-1">
                                                        <img class="avatar sm rounded-circle me-1" src="{{ asset('assets/images/xs/avatar2.jpg') }}" alt="avatar">
                                                        <span class="text-muted small">{{ Illuminate\Support\Carbon::parse($message->created_at)->format('M-d H:m') }}</span>
                                                    </div>
                                                    <div class="card border-0 p-3">
                                                        <div class="message"> {{ $message->body }}</div>
                                                    </div>
                                                </div>
                                            </li>
                                    @else
                                            <!-- Chat: right -->
                                            <li class="mb-3 d-flex flex-row-reverse align-items-end">
                                                <div class="max-width-70 text-right">
                                                    <div class="user-info mb-1">
                                                        <span class="text-muted small">{{ Illuminate\Support\Carbon::parse($message->created_at)->format('M-d H:m') }}</span>
                                                    </div>
                                                    <div class="card border-0 p-3 bg-primary text-light">
                                                        <div class="message">{{ $message->body }}</div>
                                                    </div>
                                                </div>
                                            </li>
                                    @endif

                                @empty

                                @endforelse --}}



                            </ul>




                            <form id='formInfo'>
                                @csrf
                                <div class="type_msg">
                                    <div class="input_msg_write">
                                        <input type="text" id="msgBox" name="msgBoxN" class="write_msg" placeholder="Type a message" />
                                        <input type="hidden" name="con_id" value="{{ $conversation->id }}" >
                                        <button class="msg_send_btn" id="send_msg" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
            </div> <!-- row end -->
        </div>
    </div>
 </div>



<div class="modal fade" id="depedit" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title  fw-bold" id="depeditLabel">ajouter livrable</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {{-- <form action="{{ route('tach.addlivrabe') }}" class="forms-sample" method="post"
                enctype="multipart/form-data">
                @csrf
                <div class="modal-body">

                    <div class="mb-3">

                        <div class="row g-3">

                            <input type="text" id="id_role" name="id" value="" hidden>
                            <label for="deptwo48" class="form-label">Libelle</label>

                            <input type="text" name="libelle" class="form-control" id="libelle_edit"
                                value="" required>
                        </div>
                        <div class="row g-3">
                            <label for="deptwo48" class="form-label">Fichier</label>
                            <input class="form-control" type="file" name="image" id="formFileMultiple" required>
                        </div>
                        <div class="row g-3">

                            <label class="form-label">categorie livrable</label>

                            <select class="form-select" name="categorie"
                                aria-label="Default select Project Category">
                                @forelse ($cat_livrables as $cat_livrable)
                                    <option value="{{ $cat_livrable->id }}">{{ $cat_livrable->cat_livrable }}
                                    </option>
                                @empty
                                    <option selected="">ajouter categorie</option>
                                @endforelse
                            </select>



                        </div>

                    </div>
                </div>
                <input type="hidden" value="{{ $activites->id }}" name="id_liv" class="id_liv">
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="submit" class="btn btn-dark ms-1 cmt" value="{{ $activites->id }}"
                        data-bs-toggle="modal" data-bs-target="#createproject"><i
                            class="icofont-plus-circle me-2 fs-6"></i>ajouter</button>
                </div>
            </form> --}}
        </div>
    </div>
</div>
@endsection



@section("scripts")

<script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>

<script>
    $(document).on('click','#send_msg',function (e){
        e.preventDefault();


        var msdinput = $('#msgBox').val();
        var formData = new FormData($('#formInfo')[0]);

        if(msdinput == ""){
            alert('error');
        }else{
            $.ajax({
                type:'post',
                enctype: 'multipart/form-data',
                url    : "{{route('Chat.sendMsg')}}",
                data   :formData,
                processData : false,
                contentType : false,
                cache  : false,
                success: function(data){
                    $('#msgBox').val('');

                },error: function (reject){
                    var response = $.parseJSON(reject.responseText);
                    $.each(response.errors, function (key, val) {
                        $("#" + key + "_error").text(val[0]);
                    });
                }
            });
        }

    });
</script>


<script>
    function getMessage(){
        var myEmail =  $("#myEmail").text();
        var ConUUid   =  $("#conversationUUid").text();


        $.get('/project/getAllMsg/'+ConUUid+'',{},function(data)
        {

            $('#conversationH').html('');
            for (i = 0; i < data.data.length; i++){
                email = data.data[i].email;

                if(email != myEmail){
                    $('#conversationH').append('<li class="mb-3 d-flex flex-row align-items-end"><div class="max-width-70"><div class="user-info mb-1"><img class="avatar sm rounded-circle me-1" src="http://127.0.0.1:8000/assets/images/xs/avatar2.jpg" alt="avatar"><span class="text-muted small"> '+ data.data[i].created_at +' </span></div><div class="card border-0 p-3"><div class="message">  '+ data.data[i].body +'  </div></div></li>')
                }
                else{
                    $('#conversationH').append('<li class="mb-3 d-flex flex-row-reverse align-items-end"><div class="max-width-70 text-right"><div class="user-info mb-1"><span class="text-muted small">'+ data.data[i].created_at +'</span></div><div class="card border-0 p-3 bg-primary text-light"><div class="message">'+ data.data[i].body +'</div></div></div></li>')
                }
            }
        });
    }setInterval(getMessage,2000)
</script>

@endsection
