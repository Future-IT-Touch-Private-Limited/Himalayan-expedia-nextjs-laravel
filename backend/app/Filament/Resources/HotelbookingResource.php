<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HotelbookingResource\Pages;
use App\Filament\Resources\HotelbookingResource\RelationManagers;
use App\Models\hotelbooking;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Repeater;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
class HotelbookingResource extends Resource
{
    protected static ?string $model = hotelbooking::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('banner_img')->required()->label("Banner Image"),
                TextInput::make('banner_text')->required()->label("Banner Title"),
                TextInput::make('banner_des')->required()->label("Banner Des"),
                FileUpload::make('car_img')->required()->label("Hotel Image"),
                RichEditor::make('car_about')->required()->label("Hotel About"),

                RichEditor::make('car_des')->required()->label("Hotel Description"),

                Repeater::make('faq')
                ->schema([
                    TextInput::make('question')->required(),
                    TextInput::make('answer')->required(),

                ])
                ->columns(2)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('banner_img')->label("Banner Image"),
                TextColumn::make('banner_text'),
                TextColumn::make(name: 'banner_des'),
                ImageColumn::make('car_img')->label("Hotel Image"),
                TextColumn::make(name: 'car_about')->label("Hotel About"),
                TextColumn::make(name: 'car_des')->label("Hotel Description"),
                TextColumn::make(name: 'faq'),
                
            
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListHotelbookings::route('/'),
            'create' => Pages\CreateHotelbooking::route('/create'),
            'edit' => Pages\EditHotelbooking::route('/{record}/edit'),
        ];
    }
}
