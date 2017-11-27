<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Todo;

class UniqueTodo implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $tasks = Todo::pluck('task');
        if(in_array($value, $tasks->all())) {
            return false;
        }
        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The task has already been taken';
    }
}
