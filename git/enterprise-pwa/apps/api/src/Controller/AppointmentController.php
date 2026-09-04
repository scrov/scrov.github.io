<?php

namespace App\Controller;

use App\Entity\Appointment;
use App\Message\AppointmentCreated;
use App\Repository\AppointmentRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Attribute\Route;

final readonly class AppointmentController
{
    public function __construct(
        private AppointmentRepository $appointments,
        private MessageBusInterface $bus
    ) {}

    #[Route('/api/appointments', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        $data = $request->toArray();

        $appointment = new Appointment();
        $appointment
            ->setCustomerName($data['customerName'])
            ->setCustomerEmail($data['customerEmail'])
            ->setCustomerPhone($data['customerPhone'])
            ->setService($data['service'])
            ->setScheduledAt(new \DateTimeImmutable($data['scheduledAt']));

        $this->appointments->save($appointment, true);

        $this->bus->dispatch(
            new AppointmentCreated($appointment->getId())
        );

        return new JsonResponse([
            'id' => $appointment->getId(),
            'status' => $appointment->getStatus()
        ], 201);
    }
}
