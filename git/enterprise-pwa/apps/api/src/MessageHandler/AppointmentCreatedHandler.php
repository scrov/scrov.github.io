<?php

namespace App\MessageHandler;

use App\Message\AppointmentCreated;
use App\Repository\AppointmentRepository;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler]
final readonly class AppointmentCreatedHandler
{
    public function __construct(
        private AppointmentRepository $appointments
    ) {}

    public function __invoke(AppointmentCreated $message): void
    {
        $appointment = $this->appointments->find($message->appointmentId);

        if (!$appointment) {
            return;
        }

        $appointment->setStatus('processing');

        $this->appointments->save($appointment, true);
    }
}
