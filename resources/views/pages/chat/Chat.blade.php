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
                                            <a href="{{ route('Chat.conversation',$conversation->uuid) }}" class="d-flex">
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
