<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContactsResource\Pages;
use App\Filament\Resources\ContactsResource\RelationManagers;
use App\Models\Contact;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
class ContactsResource extends Resource
{
    protected static ?string $model = Contact::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
                FileUpload::make('banner_img')->required()->label("Banner Image"),
                TextInput::make('banner_text')->required()->label("Banner Title"),
                TextInput::make('banner_des')->required()->label("Banner Des"),
                FileUpload::make('img')->required()->label("Image"),

                TextInput::make('email')->required()->label("Email"),
                TextInput::make('whatsapp_number')->required()->label("Whatsapp Number"),
                TextInput::make('contect_number')->required()->label("Contect Number"),
                RichEditor::make("address")->required()->label("Address"),


            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('banner_img')->label("Banner Image"),
                TextColumn::make('banner_text'),
                TextColumn::make(name: 'banner_des'),
                ImageColumn::make('img')->label("Image Image"),
                TextColumn::make(name: 'email'),
                TextColumn::make(name: 'whatsapp_number'),
                TextColumn::make(name: 'contect_number'),
                TextColumn::make(name: 'address'),

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
            'index' => Pages\ListContacts::route('/'),
            'create' => Pages\CreateContacts::route('/create'),
            'edit' => Pages\EditContacts::route('/{record}/edit'),
        ];
    }
}
