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
                                    @forelse ($arrayConversation as $conversation)
                                        <li class="list-group-item px-md-4 py-3 py-md-4">
                                            <a href="{{ route('Chat.conversation',$conversation->uuid) }}" class="d-flex">
                                                <span class="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">{{substr($conversation->name,0,2)}}</span>
                                                <div class="flex-fill ms-3 text-truncate">
                                                    <h6 class="d-flex justify-content-between mb-0"><span>{{ $conversation->name }}</span>
                                                        @if( $conversation->messages->last() != null)
                                                            <small class="msg-time">{{ Illuminate\Support\Carbon::parse($conversation->messages->last()->created_at)->format('H:m') }}</small></h6>
                                                            <span class="text-muted">{{ $conversation->messages->last()->body }}</span>
                                                        @else
                                                            <small class="msg-time">..:..</small></h6>
                                                            <span class="text-muted">no message</span>
                                                        @endif
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




@endsection
