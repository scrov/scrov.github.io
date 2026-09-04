<?php

namespace App\Message;

final readonly class AppointmentCreated
{
    public function __construct(
        public int $appointmentId
    ) {}
}
