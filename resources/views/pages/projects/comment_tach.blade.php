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
                        <h3 class="fw-bold mb-0">{{ $activites->libelle }}</h3>
                    </div>
                </div>
            </div> <!-- Row end  -->
            <div class="row g-3">
                <div class="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                    <div class="row g-3 mb-3">
                        <div class="col-md-4">
                            <div class="card ">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar lg  rounded-1 no-thumbnail bg-lightyellow color-defult"><i
                                                class="icofont-optic fs-4"></i></div>
                                        <div class="flex-fill ms-4 text-truncate">
                                            <div class="text-truncate">Staut</div>
                                            <span class="badge bg-warning">{{ $activites->statut_activites->statut }}</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card ">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar lg  rounded-1 no-thumbnail bg-lightblue color-defult"><i
                                                class="icofont-user fs-4"></i></div>
                                        <div class="flex-fill ms-4 text-truncate">
                                            <div class="text-truncate">Created Name</div>
                                            <span class="fw-bold">{{ $activites->user_activites->name }}</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card ">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar lg  rounded-1 no-thumbnail bg-lightgreen color-defult"><i
                                                class="icofont-price fs-4"></i></div>
                                        <div class="flex-fill ms-4 text-truncate">
                                            <div class="text-truncate">Priorite</div>
                                            <span class="badge bg-danger">{{ $activites->priorite }}</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <!-- Row end  -->
                    <div class="row g-3">
                        <div class="col-md-12">
                            <div class="card mb-3">
                                <div class="card-body">
                                    <h6 class="fw-bold mb-3 text-danger">Desciption</h6>
                                    <p>{{ $activites->description }}</p>

                                </div>
                            </div>
                            <div class="row g-3">

                                <div class="col-md-12">
                                    <div class="card">
                                        <div class="card-body">


                                            <div class="col-auto d-flex justify-content-between">
                                                <h6 class="fw-bold mb-3 text-danger">Livrable</h6>
                                                <button class=" btn btn-dark ms-1 edit_role styButton" style="border: none"
                                                    type="button" data-bs-toggle="modal" data-bs-target="#depedit"><i
                                                        class="icofont-plus-circle me-2 fs-6"></i></button>
                                                {{-- <button type="button" class="btn btn-dark ms-1 " data-bs-toggle="modaladd"data-bs-target="#createproject"><i class="icofont-plus-circle me-2 fs-6"></i></button> --}}
                                            </div>
                                            <div class="flex-grow-1">
                                                @forelse ($activites->livrable_activites as $livrable)
                                                    <div class="py-2 d-flex align-items-center border-bottom">
                                                        <div class="d-flex ms-3 align-items-center flex-fill">
                                                            <span
                                                                class="avatar lg bg-lightgreen rounded-circle text-center d-flex align-items-center justify-content-center"><i
                                                                    class="icofont-file-pdf fs-5"></i></span>
                                                            <div class="d-flex flex-column ps-3">
                                                                <h6 class="fw-bold mb-0 small-14">
                                                                    {{ $livrable->livrable }}</h6>
                                                            </div>
                                                        </div>
                                                        <button type="button" class="btn btn-dark ms-1 cmt"
                                                            value="{{ $livrable->id }}" data-bs-toggle="modal"
                                                            data-bs-target="#createproject"><i
                                                                class="icofont-plus-circle me-2 fs-6"></i>comment</button>
                                                    </div>
                                                    <input type="hidden" value="{{ $livrable->id }}" name=""
                                                        class="id_liv">
                                                @empty
                                                @endforelse
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <!-- Row end  -->
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-12 col-md-12">
                    <div class="card">
                        <div class="card-body card-body-height py-4">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <h6 class="mb-0 fw-bold mb-3">Ticket Chat</h6>

                                </div> <!-- .Card End -->
                                <ul class="list-unstyled res-set">

                                    @foreach ($commentair as $Listcom)
                                        @foreach ($Listcom as $comment)
                                            <li class="card mb-2">

                                                <div class="card-body">

                                                    <div class="timeline-item-post">
                                                        <h5>{{ $comment->name }}</h5>
                                                        <span class="text-muted small">{{ $comment->livrable }}</span>

                                                        <p>{{ $comment->commentaires }}</p>

                                                    </div>
                                                </div>
                                            </li> <!-- .Card End -->
                                        @endforeach
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>





    <!-- Create Project-->
    <div class="modal fade" id="createproject" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="createprojectlLabel"> Commentaire</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form method="post" action="{{ route('tach.addcomment') }}">
                    @csrf
                    <div class="modal-body">


                        <div class="mb-3">
                            <textarea class="form-control" name="desc" id="exampleFormControlTextarea78" rows="3"
                                placeholder="Add any extra details about the request"></textarea>
                        </div>
                        <input type="hidden" id="livr" name="livrab" class="livrab">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="submit" class="btn btn-primary">Ajouter</button>
                    </div>

                </form>
            </div>
        </div>
    </div>





    <!-- Create Project-->
    <div class="modal fade" id="depedit" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="depeditLabel">ajouter livrable</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('tach.addlivrabe') }}" class="forms-sample" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="modal-body">

                        <div class="mb-3">

                            <div class="row g-3">

                                <input type="text" id="id_role" name="id" value="" hidden>
                                <label for="deptwo48" class="form-label">Libelle</label>

                                <input type="text" name="libelle" class="form-control" id="libelle_edit"
                                    value="">
                            </div>
                            <div class="row g-3">
                                <label for="deptwo48" class="form-label">Fichier</label>
                                <input class="form-control" type="file" name="image" id="formFileMultiple">
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
                </form>
            </div>
        </div>
    </div>

@endsection
@section('scripts')

    <script>
        $(".cmt").click(function() {

            $id = $(this).val();
            // $("#livr").val($(this).parent().parent().find(".id_liv").val());
            $(".livrab").val($id);
        })
    </script>
@endsection
