<?php

namespace App\Filament\Resources\CoachRentalResource\Pages;

use App\Filament\Resources\CoachRentalResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditCoachRental extends EditRecord
{
    protected static string $resource = CoachRentalResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
