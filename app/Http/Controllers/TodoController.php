<?php

namespace App\Http\Controllers;

use App\Http\Resources\Todo as TodoResource;
use App\Todo;
use Illuminate\Http\Request;
use Validator;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new TodoResource(Todo::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'task' => 'required|string|unique:todos|max:255'
        ]);

        if ($validator->fails()) {
            return response(
                array('errors' => $validator->errors()),
                400
            );
        }

        $parsed = $request->json()->all();
        $todo = Todo::create([
            'task' => $parsed['task'],
        ]);

        // get the values of default fields
        return new TodoResource($todo);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function show(Todo $todo)
    {
        return new TodoResource($todo);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Todo $todo)
    {
        $validator = Validator::make($request->all(), [
            'task' => 'required|string|unique:todos|max:255',
            'completed' => 'required|boolean'
        ]);

        if ($validator->fails()) {
            return response(
                array('errors' => $validator->errors()),
                400
            );
        }

        $parsed = $request->json()->all();

        $todo->update([
            'task' => $parsed['task'],
            'completed' => $parsed['completed']
        ]);

        return new TodoResource($todo);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Todo $todo)
    {
        $todo->delete();

        return new TodoResource($todo);
    }
}
